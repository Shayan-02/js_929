const pool = require("./pool");

async function run(){
  await pool.query("INSERT INTO products (title, price, count, img) VALUES (?,?,?,?)", ["محصول نمونه", 120000, 5, null]);
  await pool.query("INSERT INTO users (firstname, lastname, username, password) VALUES (?,?,?,?)", ["علی", "احمدی", "ali", "1234"]);
  console.log("seed done");
  await pool.end();
}
run().catch(e=>{console.error(e); process.exit(1);});
