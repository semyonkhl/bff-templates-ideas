class UserController {
  constructor(UserService) {
    this.UserService = UserService;
    this.addUser = this.addUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  addUser(req, res, next) {
    try {
      const users = this.UserService.addUser(req.query.data);
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  getUsers(req, res, next) {
    try {
      const user = this.UserService.getUsers();
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
