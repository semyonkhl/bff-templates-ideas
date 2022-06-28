const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const { api } = require("./routes/api");
const errorHandler = require("./helpers/ErrorHandler");

class App {
  app;

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(this.app.urlencoded({ extended: true }));
    this.app.use(cors());

    //api router
    this.app.use("/api", api);

    this.app.get("/", (_, res) => {
      res.status(200).json({
        data: {
          message: "API is live, use routes to access",
        },
      });
    });

    this.app.use(errorHandler);
  }
}

module.exports = { App };
