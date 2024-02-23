const User = require("../models/User");

const { createUserInDB } = require("../services/user.service");

exports.createUser = async (req, res) => {
  try {
    // make unique user id
    const getLastUser = await User.find().sort({ _id: -1 }).limit(1);
    const id = getLastUser[0]?.userId;
    let userId;
    if (id) {
      userId = parseInt(id) + 1;
    } else {
      userId = 1001;
    }
    const user = { ...req.body, userId };

    const createdUser = await createUserInDB(user);
    res.status(200).json({
      status: "success",
      message: "Successfully created user",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Product",
      error: error.message,
    });
  }
};
