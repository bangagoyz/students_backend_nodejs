const authService = require("./auth_service");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const token = await authService.login(username, password);

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
