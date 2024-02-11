const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      default: "1000",
    },
    productName: {
      type: String,
      required: [true, "Please provide product name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    category: {
      type: String,
      required: [true, "Please provide category name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    brand: {
      type: String,
      required: true,
      lowercase: true,
    },
    origin: {
      type: String,
      required: true,
      lowercase: true,
    },

    quantity: {
      type: String,
      required: true,
      lowercase: true,
    },
    buyPrice: {
      type: Number,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },

    joining: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },

    stock: {
      type: String,
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock",
    },

    batch: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Invalid image URL",
      },
    },
    showroom: {
      type: String,
      default: "main",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
