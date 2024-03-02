const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");
const verifyToken = require("../../middleware/verifyToken");

// get all products
router.route("/all").get(verifyToken, productController.getAllProduct);

router.route("/createProduct").post(productController.createProduct);

module.exports = router;
