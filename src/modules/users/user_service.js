const bcrypt = require("bcryptjs");
const userRepository = require("./user_repository");

class UserService {
  async create(username, password) {
    const hashed = await bcrypt.hash(password, 10);
    return userRepository.create({ username, password: hashed });
  }

  getAll() {
    return userRepository.findAll();
  }
}

module.exports = new UserService();
