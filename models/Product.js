const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
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
    productType: {
      type: String,
      unique: true,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
      minLength: 11,
      maxLength: 11,
      required: true,
    },

    productId: {
      type: String,
      default: "1000",
    },
    origin: {
      type: String,
      required: true,
      lowercase: true,
    },

    brand: {
      type: String,
      required: true,
      lowercase: true,
    },
    unit: {
      type: String,
      required: true,
      lowercase: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      enum: {
        values: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
        message: "{VALUE} is not a valid name",
      },
    },

    department: {
      type: String,
      required: true,
      lowercase: true,
    },
    joining: {
      type: Date,
    },

    address: {
      type: String,
      required: true,
      lowercase: true,
    },

    title: {
      type: String,
      required: true,
      lowercase: true,
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

    password: {
      type: String,
      required: [true, "Password is required"],
      default: "123456",
    },
    role: {
      type: String,
      enum: ["suparAdmin", "admin", "teacher"],
      default: "teacher",
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
