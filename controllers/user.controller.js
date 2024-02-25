const User = require("../models/User");

const { createUserInDB, getUserInDB } = require("../services/user.service");

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

exports.getuser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    console.log(phone, password);

    if (!phone || !password) {
      return res.status(401).json({
        status: "fail",
        error: "please provide your credentials",
      });
    }

    const findUserbyPhone = await getUserInDB(phone, password);
    if (!findUserbyPhone) {
      return res.status(401).json({
        status: "fail",
        error: "No user found, please create an account",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully get user",
      data: findUserbyPhone,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Product",
      error: error.message,
    });
  }
};
