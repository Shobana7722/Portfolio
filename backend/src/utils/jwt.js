const env = require('../config/env');

const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days
    ),
    httpOnly: true
  };

  if (env.env === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};

module.exports = { sendTokenResponse };
