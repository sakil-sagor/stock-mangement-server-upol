const Product = require("../models/Product");
const {
  createProductService,
  getprocutFromDB,
} = require("../services/product.service");

exports.createProduct = async (req, res) => {
  try {
    const getLastProduct = await Product.find().sort({ _id: -1 }).limit(1);
    // .toArray();
    console.log(getLastProduct);
    // const id = getLastProd[0]?.productId;

    // let productId;
    // if (id) {
    //   productId = parseInt(id) + 1;
    // } else {
    //   productId = 1001;
    // }

    // const product = { ...req.body, productId };

    const product = await createProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully created product",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Product",
      error: error.message,
    });
  }
};
exports.getAllProduct = async (req, res) => {
  try {
    const products = await getprocutFromDB();
    res.status(200).json({
      status: "success",
      message: "Successfully created product",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Product",
      error: error.message,
    });
  }
};
