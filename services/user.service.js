const User = require("../models/User");

exports.createUserInDB = async (user) => {
  const result = await User.create(user);
  return result;
};
