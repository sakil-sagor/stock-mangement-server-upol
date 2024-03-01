const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    phone: userInfo.phone,
    role: userInfo.role,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "400days",
  });
  return token;
};
