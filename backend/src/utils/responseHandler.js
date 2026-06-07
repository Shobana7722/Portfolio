class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const sendSuccess = (res, data, statusCode = 200, message = 'Success') => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

module.exports = { ErrorResponse, sendSuccess };
