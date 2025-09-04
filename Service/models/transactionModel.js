const db = require("../db");

const addTransaction = async ({
  group_id,
  user_id,
  paid_amount,
  category,
  currency_type,
  method_type,
  group_name,
  wallet_id,
}) => {
  const result = await db.query(
    `INSERT INTO transactions 
		 (group_id, user_id, paid_amount, category, currency_type, method_type, group_name, wallet_id) 
		 VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
		 RETURNING *`,
    [
      group_id,
      user_id,
      paid_amount,
      category,
      currency_type,
      method_type,
      group_name,
      wallet_id,
    ]
  );
  return result.rows[0];
};

const getTransactionsByUserId = async (userId) => {
  try {
    const result = await db.query(
      `SELECT 
         id,
         group_name,
         category,
         paid_amount,
         currency_type,
         to_char(date, 'YYYY-MM-DD') AS date,
         to_char(time, 'HH24:MI') AS time
       FROM transactions 
       WHERE user_id = $1 
       ORDER BY created_at DESC`,
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
  getTransactionsByUserId,
  deleteTransaction,
};
