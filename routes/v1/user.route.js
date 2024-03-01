const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
// user create
router.route("/createuser").post(userController.createUser);
// find and get user
router.route("/login").post(userController.loginUser);

// get user for authprovider
router.route("/:phoneNumber").get(userController.getUser);

module.exports = router;
