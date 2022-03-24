const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "unknown endpoint!" });
};

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({ error: "Tokken missing or invalid" });
  }

  return next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
