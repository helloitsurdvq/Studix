const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const requireAuth = require("../middleware/requireAuth");
const courseController =  require("../controller/instructorController");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    }, 
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
})

const upload = multer({storage})

router.post("/courses",requireAuth, courseController.createCourse);
router.get("/courses",requireAuth, courseController.getPublishedCourse);
router.get("/courses/:id",requireAuth, courseController.getCourseById);
router.delete("/courses/:id",requireAuth, courseController.deleteCourse);
router.patch("/courses/:id",requireAuth, courseController.updateCourse);
router.patch("/courses/:id/images", requireAuth, upload.single('coverImage'), courseController.updateWithImage)

module.exports = router;
