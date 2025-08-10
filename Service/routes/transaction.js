const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const transactionController = require("../controllers/transactionController");

router.post(
  "/add-transaction/:groupId",
  authMiddleware,
  transactionController.addTransaction
);

router.get(
  "/get-transactions",
  authMiddleware,
  transactionController.getTransactions
);

router.delete(
  "/delete-transaction/:groupId",
  authMiddleware,
  transactionController.deleteTransaction
);

module.exports = router;
