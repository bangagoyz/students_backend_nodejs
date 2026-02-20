const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userRepository = require("../users/user_repository");

class AuthService {
  async login(username, password) {
    const user = await userRepository.findByUsername(username);
    if (!user) throw new Error("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid password");

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    return token;
  }
}

module.exports = new AuthService();
