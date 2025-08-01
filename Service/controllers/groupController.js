const groupModel = require("../models/groupModal");

const createGroup = async (req, res) => {
  const {
    group_name,
    status,
    start_date,
    end_date,
    plan_type,
    pay_amount,
    plan_amount,
    currency_type,
    group_category,
  } = req.body;
  const user_id = req.user.id;
  try {
    const group = await groupModel.createGroup({
      user_id,
      group_name,
      status,
      start_date,
      end_date,
      plan_type,
      pay_amount,
      plan_amount,
      currency_type,
      group_category,
    });
    res.status(201).json(group);
  } catch (err) {
    console.error("Group creation failed:", err);
    res.status(500).json({ error: "Failed to create group" });
  }
};

const getGroups = async (req, res) => {
  const userId = req.user.id;
  try {
    const groups = await groupModel.getUserGroups(userId);
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch groups" });
  }
};

const updateGroup = async (req, res) => {
  const { id } = req.params;
  const { name, budget, status, plan_type, plan_amount, icon, currency_type } =
    req.body;
  const userId = req.user.id;

  try {
    const group = await groupModel.updateGroup(
      id,
      name,
      budget,
      status,
      userId,
      plan_type,
      plan_amount,
      icon,
      currency_type
    );
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: "Failed to update group" });
  }
};

const deleteGroup = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await groupModel.deleteGroup(id, userId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete group" });
  }
};

module.exports = {
  createGroup,
  getGroups,
  updateGroup,
  deleteGroup,
};
