const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.patch("/change-password", authMiddleware, userController.changePassword);

router.post(
  "/settings/timezonelang",
  authMiddleware,
  userController.updateUserLangTimezone
);

module.exports = router;
