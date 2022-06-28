const { getUsers, addUser } = require("../services/user");

class UserController {
  constructor() {}

  createUser(req, res, next) {
    addUser(req.query.data)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        next(error);
      });
  }

  getUsers(req, res, next) {
    getUsers()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        next(error);
      });
  }
}

module.exports = UserController;
