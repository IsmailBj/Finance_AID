const express = require("express");
const bcrypt = require("bcryptjs");
const routes = express.Router();
const userModel = require("../models/userModal");

routes.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.createUser(username, email, hashedPassword);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = routes;
