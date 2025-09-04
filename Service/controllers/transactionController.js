const transaction = require("../models/transactionModel");
const groupModel = require("../models/groupModel");

const addTransaction = async (req, res) => {
  const { groupId } = req.params;
  const {
    paid_amount,
    category,
    currency_type,
    method_type,
    wallet_id,
    group_name,
  } = req.body;
  const userId = req.user.id;

  try {
    await groupModel.updateGroupStatus(groupId, "paid", userId);
    await transaction.addTransaction({
      group_id: groupId,
      user_id: userId,
      paid_amount,
      category,
      currency_type,
      method_type,
      group_name,
      wallet_id: wallet_id,
    });
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return res.status(500).json({ error: "Failed to add transaction" });
  }
};

const getTransactions = async (req, res) => {
  const userId = req.user.id;
  try {
    const transactions = await transaction.getTransactionsByUserId(userId);

    const DataToSend = transactions.map((item) => ({
      group_name: item.group_name,
      category: item.category,
      paid_amount: item.paid_amount,
      currency_type: item.currency_type,
      date: item.date,
      time: item.time,
    }));

    res.json(DataToSend);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

const deleteTransaction = async (req, res) => {
  const { groupId } = req.params;

  const userId = req.user.id;
  try {
    const group = await groupModel.updateGroupStatus(groupId, "unpaid", userId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    await transaction.deleteTransaction(groupId, userId);
    res.status(200).json({ message: "Transaction undone successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return res.status(500).json({ error: "Failed to delete transaction" });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  deleteTransaction,
};
