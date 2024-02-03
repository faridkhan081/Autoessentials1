// utils/jwtToken.js 
const jwt = require("jsonwebtoken");

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// create reset token
const createResetToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.RESET_SECRET, {
    expiresIn: "15m",
  });
};

// send token and reset token
const sendToken = (user, statusCode, res, resetToken = null) => {
  const token = user.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (resetToken) {
    options.expires = new Date(Date.now() + 15 * 60 * 1000); // Set a shorter expiration for the reset token
    res.cookie("resetToken", resetToken, options);
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = { createActivationToken, createResetToken, sendToken };
