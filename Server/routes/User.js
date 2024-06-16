const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const userController =  require("../controller/userController");
const isAdmin = require("../middleware/isAdmin");
const cartController = require('../controller/cartController');

router.get("/", requireAuth, userController.getprofile);
router.patch("/", requireAuth, userController.updateprofile);
router.patch("/password", requireAuth, userController.changepassword);
router.get("/courses", requireAuth, userController.getPurchasedCourses);

router.post('/cart/checkout',requireAuth, cartController.checkout);
router.post('/cart/:id',requireAuth, cartController.addToCart);
router.delete('/cart/:id',requireAuth, cartController.removeFromCart);
router.get('/cart',requireAuth, cartController.viewCart);


router.get("/:id",requireAuth, isAdmin, userController.getUserById)
module.exports = router;
