require("dotenv").config();
const { Pool } = require("pg");

console.log({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: parseInt(process.env.DB_MAX_CLIENTS, 10) || 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: parseInt(process.env.DB_CONNECT_TIMEOUT, 10),
  ssl: false,
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionTimeoutMillis: 3000, // keep it low for testing
});

module.exports = {
  query: (text, params) => pool.query(text, params),

  getClient: async () => {
    const client = await pool.connect();
    return client;
  },

  end: () => pool.end(),
};

const gracefulShutdown = () => {
  pool.end().then(() => {
    console.log("PostgreSQL pool has ended");
    process.exit(0);
  });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
