require("dotenv").config();
const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth");
const groupRoutes = require("./routes/group");
const walletRoutes = require("./routes/wallet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Import routes
app.use("/api/auth", authRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/wallet", walletRoutes);

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.get("/:path*", function (req, res) {
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
