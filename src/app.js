const express = require("express");

require("express-async-errors");
const morgan = require("morgan");
const routes = require("./routes/routes");
const cors = require("cors");
const middleware = require("./utils/midddleware");
const { CORS_URL } = process.env;

const server = express();

server.name = "API";
server.use(cors());
server.use(express.json())
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/api", routes);

server.use(middleware.unknownEndpoint);
server.use(middleware.errorHandler);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

module.exports = server;
