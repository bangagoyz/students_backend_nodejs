const router = require("express").Router();
const controller = require("./user_controller");

router.post("/", controller.create);
router.get("/", controller.getAll);

module.exports = router;
