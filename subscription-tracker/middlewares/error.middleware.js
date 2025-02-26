const errorMiddleWare = function (err, req, res, next) {
  try {
    let error = { ...err };
    error.messgae = err.messgae || "error happend in the middleware";
    console.error(error);

    // Mongoose bad objectId
    if (error.name === "CastError" && error.kind === "ObjectId") {
      const message = "Resource not Found";

      error = new Error(message);
      error.statusCode = 404;
    }

    // Mongoose duplicate Key
    if (error.code === 11000) {
      const message = "Duplicate key error";

      error = new Error(message);
      error.statusCode = 400;
    }

    // mongoose validation error
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");

      error = new Error(message);
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "server Error",
    });
  } catch (error) {
    next(error);
  }
};
