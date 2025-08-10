const db = require("../db");

const addTransaction = async ({
  group_id,
  paid_amount,
  category,
  currency_type,
  method_type,
  user_id,
  wallet_id,
}) => {
  const result = await db.query(
    `INSERT INTO transactions 
		 (group_id, paid_amount, category, currency_type, method_type, user_id, wallet_id) 
		 VALUES ($1, $2, $3, $4, $5, $6, $7) 
		 RETURNING *`,
    [
      group_id,
      paid_amount,
      category,
      currency_type,
      method_type,
      user_id,
      wallet_id,
    ]
  );
  return result.rows[0];
};

const getTransactionsByGroup = async (userId) => {
  try {
    const result = await db.query(
      `SELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );

    return result.rows;
  } catch (error) {
    console.log("Error fetching user Transaction", error);
    throw error;
  }
};

const deleteTransaction = async (groupId, userid) => {
  try {
    await db.query(
      `DELETE FROM transactions WHERE group_id = $1 AND user_id = $2`,
      [groupId, userid]
    );
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};

module.exports = {
  addTransaction,
  getTransactionsByGroup,
  deleteTransaction,
};
