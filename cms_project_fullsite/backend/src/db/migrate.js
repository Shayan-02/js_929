const fs = require("fs");
const path = require("path");
const pool = require("./pool");

async function ensureMigrationsTable(conn){
  await conn.query(`
    CREATE TABLE IF NOT EXISTS _migrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      applied_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

async function alreadyApplied(conn, name){
  const [rows] = await conn.query("SELECT 1 FROM _migrations WHERE name=? LIMIT 1", [name]);
  return rows.length > 0;
}

async function markApplied(conn, name){
  await conn.query("INSERT INTO _migrations (name) VALUES (?)", [name]);
}

function splitSql(sql){
  return sql
    .split(/;\s*\n/g)
    .map(s => s.trim())
    .filter(Boolean);
}

async function runSqlFile(conn, filePath){
  const sql = fs.readFileSync(filePath, "utf8");
  for(const st of splitSql(sql)){
    await conn.query(st);
  }
}

async function runJsFile(conn, filePath){
  const runner = require(filePath);
  if(typeof runner !== "function"){
    throw new Error("JS migration must export a function(conn)");
  }
  await runner(conn);
}

async function run(){
  const dir = path.join(__dirname, "migrations");
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith(".sql") || f.endsWith(".js"))
    .sort();

  const conn = await pool.getConnection();
  try{
    await conn.beginTransaction();
    await ensureMigrationsTable(conn);
    await conn.commit();
  }finally{
    conn.release();
  }

  for(const file of files){
    const name = file;
    const conn2 = await pool.getConnection();
    try{
      await conn2.beginTransaction();
      await ensureMigrationsTable(conn2);

      if(await alreadyApplied(conn2, name)){
        await conn2.commit();
        console.log(`✓ skip ${name}`);
        continue;
      }

      console.log(`→ apply ${name}`);
      const full = path.join(dir, file);

      if(file.endsWith(".sql")){
        await runSqlFile(conn2, full);
      } else {
        await runJsFile(conn2, full);
      }

      await markApplied(conn2, name);
      await conn2.commit();
      console.log(`✓ applied ${name}`);
    }catch(e){
      await conn2.rollback();
      console.error(`✗ failed ${name}`, e.message);
      process.exitCode = 1;
      break;
    }finally{
      conn2.release();
    }
  }

  await pool.end();
}

run();
