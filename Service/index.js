require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db");
const authRoutes = require("./routes/auth");
const groupRoutes = require("./routes/group");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database connection failede" });
  }
});

// Import routes

app.use("/api/auth", authRoutes);
app.use("/api/group", groupRoutes);

// app.use("/api", )

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.get("/:path*", function (req, res) {
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
