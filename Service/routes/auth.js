const express = require("express");
const userController = require("../controllers/userController");
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;

// router.get("/dashboard", verifyToken, (req, res) => {
//   res.json({ message: `Welcome, ${req.user.username}!`, userId: req.user.id });
// });
