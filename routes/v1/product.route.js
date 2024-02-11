const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");

// get all teacher
// router.route("/all").get(teacherControl.getAllTeacher);

router.route("/createProduct").post(productController.createProduct);

module.exports = router;
