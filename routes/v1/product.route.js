const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");
const verifyToken = require("../../middleware/verifyToken");

// get all products
router.route("/all").get(verifyToken, productController.getAllProduct);

// get all products for search
router.route("/allproduct").get(productController.getAllProductbySearch);
// add category
router
  .route("/category")
  .get(productController.getAllCategory)
  .post(productController.createCategory);

router.route("/category/:categoryId").delete(productController.deleteCategory);

router.route("/createProduct").post(productController.createProduct);

module.exports = router;
