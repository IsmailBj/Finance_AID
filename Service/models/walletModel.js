const db = require("../db");

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

const updateWallet = async (
  card_name,
  user_id,
  card_type,
  balance,
  currency_type,
  expire_date
) => {
  const result = await db.query(
    `UPDATE wallets SET card_name = $1, card_type = $2, balance = $3, currency_type = $4, expire_date = $5
         WHERE user_id = $6 RETURNING *`,
    [card_name, card_type, balance, currency_type, expire_date, user_id]
  );
  return result.rows[0];
};

const deleteWallet = async (walletId, userId) => {
  await db.query("DELETE FROM wallets WHERE id = $1 AND user_id = $2", [
    walletId,
    userId,
  ]);
};

const findWalletById = async (walletId) => {
  const result = await db.query("SELECT * FROM wallets WHERE id = $1", [
    walletId,
  ]);
  return result.rows[0];
};

module.exports = {
  createWallet,
  getUserWallets,
  updateWallet,
  deleteWallet,
  findWalletById,
};
