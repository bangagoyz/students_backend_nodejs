const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./modules/users/user_routes");
const app = express();

require("./modules/users/user_model");
sequelize.sync();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB Error:", err));

module.exports = app;
