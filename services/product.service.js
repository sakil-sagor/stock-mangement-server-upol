const Category = require("../models/Category");
const Product = require("../models/Product");

exports.createProductService = async (productDetails) => {
  const studentAdd = await Product.create(productDetails);
  return studentAdd;
};

exports.getAllProductsbySearchDB = async (filters, queries) => {
  console.log(filters);

  const result = await Product.aggregate([
    {
      $match: {
        ["productName"]: filters,
      },
    },

    // {
    //   $skip: queries.skip,
    // },
    // {
    //   $limit: parseInt(queries.limit),
    // },
  ]);
  // .skip(queries.skip)
  // .limit(queries.limit)
  // .sort(queries.sortBy);

  console.log(result);
  const totalRoom = await Product.countDocuments(filters);
  console.log(totalRoom);
  const pageCount = Math.ceil(totalRoom / queries.limit);

  return { result, totalRoom, pageCount };
};
// get products from db
exports.getprocutFromDB = async () => {
  const allProducts = await Product.find({});
  return allProducts;
};
// get category from db
exports.getCategoryFromDB = async () => {
  const allProducts = await Category.find({});
  return allProducts;
};

// create category in db
exports.createCategoryinDb = async (categoryDetials) => {
  console.log(categoryDetials);
  const result = await Category.create(categoryDetials);
  return result;
};
// delete category in db
exports.deleteCategoryFromDB = async (categoryId) => {
  console.log(categoryId);
  const result = await Category.deleteOne({ _id: categoryId });
  console.log(result);
  return result;
};
