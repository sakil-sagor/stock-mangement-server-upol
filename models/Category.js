const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
