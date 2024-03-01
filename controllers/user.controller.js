const User = require("../models/User");

const {
  createUserInDB,
  getUserInDB,
  findUserByPhone,
} = require("../services/user.service");
const { generateToken } = require("../utils/token");

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

exports.loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const { phone, password } = req.body;
    console.log(phone, password);

    if (!phone || !password) {
      return res.status(401).json({
        status: "fail",
        error: "please provide your credentials",
      });
    }

    const findUser = await getUserInDB(phone, password);
    if (!findUser) {
      return res.status(401).json({
        status: "fail",
        error: "No user found, please create an account",
      });
    }
    const token = generateToken(findUser);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true, userData: findUser });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find user",
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    console.log(phoneNumber);

    const userData = await findUserByPhone(phoneNumber);

    res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Product",
      error: error.message,
    });
  }
};
