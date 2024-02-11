const Product = require("../models/Product");

exports.createProductService = async (productDetails) => {
  const studentAdd = await Product.create(productDetails);
  return studentAdd;
};
