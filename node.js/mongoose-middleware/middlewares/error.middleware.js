function errorHandler(err, req, res, next) {
//   console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: 'fail',
      message: Object.values(err.errors)
        .map((e) => e.message)
        .join(", "),
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      status: 'fail',
      message: "Invalid ID format",
    });
  }

  res.status(500).json({
    status: 'error',
    message: "Internal Server Error",
  });
}

export default errorHandler;