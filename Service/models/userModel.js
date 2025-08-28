const db = require("../db");

const findUserByEmail = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await db.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

const createUser = async (username, email, hashedPassword, timezone) => {
  const result = await db.query(
    "INSERT INTO users (username, email, password, timezone) VALUES ($1, $2, $3, $4) RETURNING id, username, email, timezone",
    [username, email, hashedPassword, timezone]
  );
  return result.rows[0];
};

module.exports = {
  findUserByEmail,
  findUserByUsername,
  createUser,
};
