const router = require("express").Router();
const controller = require("./user_controller");
const { verifyToken } = require("../../middleware/auth_middleware");

router.post("/", verifyToken, controller.create);
router.get("/", verifyToken, controller.getAll);

module.exports = router;
