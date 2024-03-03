const Product = require("../models/Product");
const {
  createProductService,
  getprocutFromDB,
  getAllProductsbySearchDB,
  createCategoryinDb,
  getCategoryFromDB,
  deleteCategoryFromDB,
} = require("../services/product.service");

exports.createProduct = async (req, res) => {
  try {
    const getLastProduct = await Product.find().sort({ _id: -1 }).limit(1);
    // .toArray();

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

// get all products by search

exports.getAllProductbySearch = async (req, res) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((field) => delete filters[field]);

    const queries = {};
    // separate sort and make fit for data query
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    // load specific property and value ( fields)
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    // pagination
    if (req.query.page) {
      const { page = 1, limit = 3 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = limit;
    }

    const products = await getAllProductsbySearchDB(filters, queries);
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
// get all products
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

// create catagory

exports.createCategory = async (req, res) => {
  try {
    const category = await createCategoryinDb(req.body);
    console.log(category);
    res.status(200).json({
      status: "success",
      message: "Successfully created ",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create ",
      error: error.message,
    });
  }
};

// get all category
exports.getAllCategory = async (req, res) => {
  try {
    const products = await getCategoryFromDB();
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
//delete  category
exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await deleteCategoryFromDB(categoryId);
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
