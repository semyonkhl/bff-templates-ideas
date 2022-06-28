

const ErrorHandler = (error, _, res, __) => {
  
  const code = error.code || error.status || 500;

  res.status(code).json({
    statusCode: code,
    data: {
      error: error.message
    }
  });
};

module.exports = ErrorHandler;