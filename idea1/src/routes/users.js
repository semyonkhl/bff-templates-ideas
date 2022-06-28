const { Router } = require("express");
const getUsers = require("../services/users/getUsers");
const addUser = require("../services/users/addUser");

let userRouter = Router()
  .get("/", (req, res) => {
    getUsers()
      .then((users) => res.status(200).json(users))
      .catch((err) => next(err));
  })
  .post("/:id", (req, res) => {
    addUser(req.params.id)
      .then((user) => res.status(200).json(user))
      .catch((err) => next(err));
  });

module.exports = { userRouter };
