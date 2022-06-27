const { Router } = require("express");
const getUsers = require("../services/users/getUsers");
const addUser = require("../services/users/addUser");

let userRouter = Router()
  .get("/", (req, res) => {
    getUsers()
      .then((u) => res.status(200).json(u))
      .catch((e) => res.status(500).json(e));
  })
  .post("/:id", (req, res) => {
    addUser(id)
      .then((u) => res.status(200).json(u))
      .catch((e) => res.status(500).json(e));
  });

module.exports = { userRouter };
