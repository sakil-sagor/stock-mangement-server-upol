const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
// user create
router.route("/createuser").post(userController.createUser);
// find and get user
router.route("/login").get(userController.getuser);

module.exports = router;
