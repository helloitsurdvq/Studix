const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const courseController =  require("../controller/courseController");

router.get("/", courseController.getCourses);
router.get("/:id", courseController.getCourseById);
router.post("/:id/rating",requireAuth, courseController.updateRating);

module.exports = router;
