const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./modules/users/user_routes");
const authRoutes = require("./modules/auth/auth_routes");
const studentRoutes = require("./modules/student/student_routes");
const app = express();

require("./modules/users/user_model");
sequelize.sync();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

app.use("/api/users", userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/student", studentRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB Error:", err));

module.exports = app;
