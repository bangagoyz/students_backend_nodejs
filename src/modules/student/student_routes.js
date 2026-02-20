const router = require("express").Router();
const controller = require("./student_controller");
const { verifyToken } = require("../../middleware/auth_middleware");

router.use(verifyToken);

router.get("/", controller.search);

module.exports = router;
