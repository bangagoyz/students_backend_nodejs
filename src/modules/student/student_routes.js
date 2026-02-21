const router = require("express").Router();
const controller = require("./student_controller");
const { verifyToken } = require("../../middleware/auth_middleware");

router.use(verifyToken);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Search students from external API
 */

/**
 * @swagger
 * /api/student:
 *   get:
 *     summary: Search students by name, or nim or ymd. better choose 1 parameter
 *     tags: [Students]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: nama
 *         schema:
 *           type: string
 *         description: Search by student name
 *       - in: query
 *         name: nim
 *         schema:
 *           type: string
 *         description: Search by NIM
 *       - in: query
 *         name: ymd
 *         schema:
 *           type: string
 *         description: Search by YMD
 *     responses:
 *       200:
 *         description: List of students matching query
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No students found matching the query
 */
router.get("/", controller.search);

module.exports = router;
