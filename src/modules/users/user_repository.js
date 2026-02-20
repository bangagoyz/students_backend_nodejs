const User = require("./user_model");

class UserRepository {
  create(data) {
    return User.create(data);
  }

  findAll() {
    return User.findAll();
  }

  findByUsername(username) {
    return User.findOne({ where: { username } });
  }
}

module.exports = new UserRepository();
