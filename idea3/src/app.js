const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const { api } = require("./routes/api");

class App {
  app;

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use("/api", api);
  }
}

module.exports = { App };
