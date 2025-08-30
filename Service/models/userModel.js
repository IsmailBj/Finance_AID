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

const findUserById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const createUser = async (username, email, hashedPassword, timezone) => {
  const result = await db.query(
    "INSERT INTO users (username, email, password, timezone) VALUES ($1, $2, $3, $4) RETURNING id, username, email, timezone",
    [username, email, hashedPassword, timezone]
  );
  return result.rows[0];
};

const updateUserLangTimezone = async (user_id, lang, timezone) => {
  try {
    const result = await db.query(
      "UPDATE users SET language = $1, timezone = $2 WHERE id = $3 RETURNING language, timezone",
      [lang, timezone, user_id]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error updating user language/timezone:", error);
    throw error;
  }
};

const updateUserPassword = async (user_id, hashedPassword) => {
  try {
    const result = await db.query(
      "UPDATE users SET password = $1 WHERE id = $2 RETURNING id, email, username",
      [hashedPassword, user_id]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  findUserByUsername,
  createUser,
  findUserById,
  updateUserLangTimezone,
  updateUserPassword,
};
