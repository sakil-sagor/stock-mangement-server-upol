const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    const { phone } = req?.params;

    const token = req?.cookies?.token;

    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not logged in",
      });
    }

    // jwt ekti cl back func return kore tai node er ekti core module pormisify use kore etake pormise kora hoy
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );

    // if (decoded.email !== email) {
    //     return res.status(401).json({
    //         status: "fail",
    //         error: "You are not logged"
    //     });
    // }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};
