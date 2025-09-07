const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, timezone } = req.body;

  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.createUser(
      username,
      email,
      hashedPassword,
      timezone
    );

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        email: user.email,
        language: user.language,
        timezone: user.timezone,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUserLangTimezone = async (req, res) => {
  const user_id = req.user.id;
  const { language, timezone } = req.body;
  try {
    const updatedUser = await userModel.updateUserLangTimezone(
      user_id,
      language,
      timezone
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "Timezone/Language updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update TimeZone or Language" });
  }
};

const updateAvatarName = async (req, res) => {
  const { avatar } = req.body;
  const response = await userModel.updateAvatar(avatar);

  if (response.success) {
    res.status(200).json({ message: "Avatar updated successfully" });
  } else {
    console.error("Error updating password:", response);
    res.status(500).json({ message: "Failed to update avatar" });
  }
};

const changePassword = async (req, res) => {
  const user_id = req.user.id;
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await userModel.findUserById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // check old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect" });
    }

    // hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // update in DB
    const updatedUser = await userModel.updateUserPassword(
      user_id,
      hashedPassword
    );

    res.status(200).json({
      message: "Password updated successfully",
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Failed to update password" });
  }
};

module.exports = {
  register,
  login,
  updateUserLangTimezone,
  changePassword,
  updateAvatarName,
};
