const db = require("../db");

const createGroup = async ({
  group_name,
  status,
  pay_amount,
  start_date,
  end_date,
  user_id,
  plan_type,
  plan_amount,
  currency_type,
  group_category,
  wallet_id,
}) => {
  const result = await db.query(
    `INSERT INTO groups (group_name, pay_amount, status, user_id, plan_type, plan_amount, start_date, end_date, currency_type, group_category, wallet_id)
  	 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  	 RETURNING *`,
    [
      group_name,
      pay_amount,
      status,
      user_id,
      plan_type,
      plan_amount,
      start_date,
      end_date,
      currency_type,
      group_category,
      wallet_id,
    ]
  );
  return result.rows[0];
};

const getUserGroups = async (userId) => {
  try {
    const result = await db.query(
      `SELECT * FROM groups WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching user groups:", error);
    throw error;
  }
};

const updateGroup = async (
  groupId,
  name,
  budget,
  status,
  userId,
  plan_type,
  plan_amount
) => {
  const result = await db.query(
    `UPDATE groups SET name = $1, budget = $2, status = $3, plan_type = $4, plan_amount = $5
		 WHERE id = $6 AND user_id = $7 RETURNING *`,
    [name, budget, status, plan_type, plan_amount, groupId, userId]
  );
  return result.rows[0];
};

const updateGroupStatus = async (groupId, status, userId) => {
  const result = await db.query(
    `UPDATE groups SET status = $1 
         WHERE id = $2 AND user_id = $3 
         RETURNING *`,
    [status, groupId, userId]
  );
  return result.rows[0];
};

const deleteGroup = async (groupId, userId) => {
  await db.query("DELETE FROM groups WHERE id = $1 AND user_id = $2", [
    groupId,
    userId,
  ]);
};

const getPlanAmountByCategory = async (userId) => {
  const query = `
		SELECT group_category, SUM(plan_amount) AS total
		FROM groups
		WHERE user_id = $1
		AND status != 'paid'
		GROUP BY group_category
		ORDER BY group_category;
	`;

  const { rows } = await db.query(query, [userId]);

  // Convert string to number
  return rows.map((row) => ({
    group_category: row.group_category,
    total: Number(row.total),
  }));
};

const findGroupById = async (id) => {
  const result = await db.query("SELECT * FROM groups WHERE id = $1", [id]);
  return result.rows[0];
};

module.exports = {
  createGroup,
  getUserGroups,
  updateGroup,
  deleteGroup,
  getPlanAmountByCategory,
  findGroupById,
  updateGroupStatus,
};
