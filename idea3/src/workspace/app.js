const express = require("express");
const cors = require("cors");

const ErrorHandler = require("./helpers/errorHandler");
const api = require("./routes/api");

const server = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", api(express.Router));

  app.get("/", (_, res) => {
    res.status(200).json({
      data: {
        message: "API is live!",
      },
    });
  });

  app.use(ErrorHandler);

  return app;
};

module.exports = server;
