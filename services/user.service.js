const User = require("../models/User");
// create user

exports.createUserInDB = async (user) => {
  const result = await User.create(user);
  return result;
};

// get single user
exports.getUserInDB = async (phone, password) => {
  const result = await User.findOne({ phone: phone, password: password });
  return result;
};
