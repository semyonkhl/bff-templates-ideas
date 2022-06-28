const UserController = require("../../users/userController");
const UserService = require("../../users/userService");

const userRoutes = (Router) => {
  const router = Router();

  let uc = new UserController(new UserService());

  router.get("/", uc.getUsers);

  router.post("/", uc.addUser);

  return router;
};

module.exports = userRoutes;
