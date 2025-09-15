const db = require("../db");

// create new wallet
const createWallet = async (
  card_name,
  user_id,
  card_type,
  balance,
  currency_type,
  expire_date
) => {
  const resault = await db.query(
    `INSERT INTO wallets (card_name, user_id, card_type, balance, currency_type, expire_date)
         VALUES ($1, $2, $3, $4, $5, $6
         ) RETURNING *`,
    [card_name, user_id, card_type, balance, currency_type, expire_date]
  );
  return resault.rows[0];
};
// get all wallets by user id
const getUserWallets = async (userId) => {
  try {
    const result = await db.query(
      `SELECT * FROM wallets WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching user wallets:", error);
    throw error;
  }
};
// update wallet
const updateWallet = async (
  card_name,
  user_id,
  card_type,
  balance,
  currency_type,
  expire_date,
  allocated_amount = 0
) => {
  const result = await db.query(
    `UPDATE wallets SET 
    card_name = $1, 
    card_type = $2, 
    balance = $3, 
    currency_type = $4, 
    expire_date = $5, 
    allocated_amount = $7
    WHERE user_id = $6 RETURNING *`,
    [
      card_name,
      card_type,
      balance,
      currency_type,
      expire_date,
      user_id,
      allocated_amount,
    ]
  );
  return result.rows[0];
};

// delete single wallet
const deleteWallet = async (walletId, userId) => {
  await db.query("DELETE FROM wallets WHERE id = $1 AND user_id = $2", [
    walletId,
    userId,
  ]);
};
// get siongle wallet by id
const findWalletById = async (walletId) => {
  const result = await db.query("SELECT * FROM wallets WHERE id = $1", [
    walletId,
  ]);
  return result.rows[0];
};
//  get a column or columns from wallet table
const getWalletColumns = async (userId, columns = []) => {
  try {
    const allowedColumns = [
      "card_name",
      "user_id",
      "card_type",
      "created_at",
      "balance",
      "currency_type",
      "expire_date",
      "id",
      "allocated_amount",
    ];

    const safeColumns = columns.filter((col) => allowedColumns.includes(col));

    if (safeColumns.length === 0) {
      throw new Error("No valid column names provided");
    }

    const query = `SELECT ${safeColumns.join(
      ", "
    )} FROM wallets WHERE user_id = $1`;
    const values = [userId];
    const result = await db.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (err) {
    console.error("Error fetching columns:", err);
    throw err;
  }
};

// update allocated_amount safely
const updateWalletAllocatedAmount = async (user_id, amount) => {
  const result = await db.query(
    `UPDATE wallets 
     SET allocated_amount = allocated_amount + $2
     WHERE user_id = $1 
     RETURNING *`,
    [user_id, amount]
  );

  return result.rows[0];
};

const updateWalletBalance = async (user_id, amount) => {
  console.log(
    "Updating wallet balance for user:",
    user_id,
    "by amount:",
    amount
  );
  const result = await db.query(
    `UPDATE wallets
      SET balance = balance + $2
      WHERE user_id = $1
      RETURNING *`,
    [user_id, amount]
  );

  return result.rows[0];
};

module.exports = {
  createWallet,
  getUserWallets,
  updateWallet,
  deleteWallet,
  findWalletById,
  getWalletColumns,
  updateWalletAllocatedAmount,
  updateWalletBalance,
};
