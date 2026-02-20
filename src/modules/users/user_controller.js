const userService = require("./user_service");

exports.create = async (req, res) => {
  const { username, password, role } = req.body;
  const user = await userService.create(username, password);
  res.status(201).json(user);
};

exports.getAll = async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
};
