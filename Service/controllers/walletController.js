const walletModal = require("../models/walletModel");

const createWallet = async (req, res) => {
  const { card_name, card_type, balance, currency_type, expire_date } =
    req.body;
  const userId = req.user.id;

  try {
    const wallet = await walletModal.createWallet(
      card_name,
      userId,
      card_type,
      balance,
      currency_type,
      expire_date
    );
    res.status(201).json(wallet);
  } catch (err) {
    console.error("Wallet creation failed:", err);
    res.status(500).json({ error: "Failed to create wallet" });
  }
};

const getWallets = async (req, res) => {
  const userId = req.user.id;
  try {
    const wallets = await walletModal.getUserWallets(userId);
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch wallets" });
  }
};

const updateWallet = async (req, res) => {
  const { card_name, card_type, balance, currency_type, expire_date } =
    req.body;
  const userId = req.user.id;

  try {
    const wallet = await walletModal.updateWallet(
      card_name,
      userId,
      card_type,
      balance,
      currency_type,
      expire_date
    );
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: "Failed to update wallet" });
  }
};

const deleteWallet = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const wallet = await walletModal.findWalletById(id);
    if (!wallet) {
      return res.status(404).json({ error: "Wallet not found" });
    }

    if (wallet.user_id !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    await walletModal.deleteWallet(id, userId);
    res
      .status(204)
      .json({ success: true, message: "Wallet deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete wallet" });
  }
};

module.exports = {
  createWallet,
  getWallets,
  updateWallet,
  deleteWallet,
};
