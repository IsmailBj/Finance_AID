const groupModel = require("../models/groupModal");

const createGroup = async (req, res) => {
  const { name, budget, status, plan_type, plan_amount } = req.body;
  const userId = req.user.id;

  try {
    const group = await groupModel.createGroup(
      name,
      budget,
      status,
      userId,
      plan_type,
      plan_amount
    );
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
  const { name, budget, status, plan_type, plan_amount } = req.body;
  const userId = req.user.id;

  try {
    const group = await groupModel.updateGroup(
      id,
      name,
      budget,
      status,
      userId,
      plan_type,
      plan_amount
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
