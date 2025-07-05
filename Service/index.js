require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist/test.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
