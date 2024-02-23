const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "Please provide product name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      default: "123456",
    },
    email: {
      type: String,
      validate: {
        validator: (value) => validator.isEmail(value), // Validate the email format
        message: "Invalid email address",
      },
      default: "demo@demo.com",
    },
    role: {
      type: String,
      enum: ["suparAdmin", "admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
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

const User = mongoose.model("User", UserSchema);
module.exports = User;
