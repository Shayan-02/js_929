const bcrypt = require("bcryptjs");

module.exports = async function(conn){
  // add isAdmin column if missing
  const [cols] = await conn.query("SHOW COLUMNS FROM users LIKE 'isAdmin'");
  if(cols.length === 0){
    await conn.query("ALTER TABLE users ADD COLUMN isAdmin TINYINT NOT NULL DEFAULT 0");
  }

  // ensure admin exists
  const username = "admin";
  const passwordPlain = "admin";
  const passwordHash = bcrypt.hashSync(passwordPlain, 10);

  // If admin exists, keep username but reset password to 'admin' to match project requirement.
  const [exists] = await conn.query("SELECT id FROM users WHERE username=? LIMIT 1", [username]);
  if(exists.length){
    await conn.query(
      "UPDATE users SET password=?, firstname=?, lastname=?, isAdmin=1 WHERE username=?",
      [passwordHash, "Admin", "Admin", username]
    );
  } else {
    await conn.query(
      "INSERT INTO users (firstname, lastname, username, password, isAdmin) VALUES (?,?,?,?,1)",
      ["Admin", "Admin", username, passwordHash]
    );
  }
};
