const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

router.route("/createuser").post(userController.createUser);

module.exports = router;
