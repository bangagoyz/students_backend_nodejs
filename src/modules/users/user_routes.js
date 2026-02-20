const router = require("express").Router();
const controller = require("./user_controller");
const { verifyToken } = require("../../middleware/auth_middleware");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User CRUD
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: please create user and login to get token for searching students
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: newuser
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User created successfully
 *       401:
 *         description: Unauthorized
 *
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       401:
 *         description: Unauthorized
 */
router.post("/", verifyToken, controller.create);
router.get("/", verifyToken, controller.getAll);

module.exports = router;
