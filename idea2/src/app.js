const express = require("express");
const cors = require("cors");

const ErrorHandler = require("../helpers/error-handler");
const apiRouter = require("./routes");
const { setupContainer } = require("../config/container");

const server = () => {
  setupContainer();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRouter(express.Router));

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
