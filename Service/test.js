const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "qwe",
  port: 5432,
  connectionTimeoutMillis: 3000, // keep it low for testing
});

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected:", res.rows[0]);
  } catch (err) {
    console.error("Failed to connect:", err);
  } finally {
    await pool.end();
  }
})();
