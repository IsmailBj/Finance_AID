const transaction = require("../models/transactionModel");
const groupModel = require("../models/groupModel");

const addTransaction = async (req, res) => {
  const { groupId } = req.params;
  const { paid_amount, category, currency_type, method_type } = req.body;
  const userId = req.user.id;
  try {
    await groupModel.updateGroupStatus(groupId, "paid", userId);
    await transaction.addTransaction({
      group_id: groupId,
      paid_amount,
      category,
      currency_type,
      method_type,
      user_id: userId,
    });
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return res.status(500).json({ error: "Failed to add transaction" });
  }
};

const getTransactions = async (req, res) => {
  const { groupId } = req.params;
  const userId = req.user.id;
  try {
    const transactions = await transaction.getTransactionsByGroup(
      groupId,
      userId
    );
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
};
