require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const groupRoutes = require("./routes/group");
const walletRoutes = require("./routes/wallet");
const transactionRoutes = require("./routes/transaction");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction", transactionRoutes);

app.use(express.static(path.join(__dirname, "../Client/dist")));

app.get("*", (req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
