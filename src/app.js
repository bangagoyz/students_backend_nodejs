const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB Error:", err));

module.exports = app;
