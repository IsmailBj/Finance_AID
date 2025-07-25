const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get-wallets", authMiddleware, walletController.getWallets);
router.post("/create-wallet", authMiddleware, walletController.createWallet);
router.put("/update/:id", authMiddleware, walletController.updateWallet);
router.delete("/delete/:id", authMiddleware, walletController.deleteWallet);

module.exports = router;
