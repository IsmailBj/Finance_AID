const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get-groups", authMiddleware, groupController.getGroups);

router.post("/create-group", authMiddleware, groupController.createGroup);

router.put("/update/:id", authMiddleware, groupController.updateGroup);

router.delete("/delete/:id", authMiddleware, groupController.deleteGroup);

module.exports = router;
