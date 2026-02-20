const User = require("./user_model");

class UserRepository {
  create(data) {
    return User.create(data);
  }

  findAll() {
    return User.findAll();
  }
}

module.exports = new UserRepository();
