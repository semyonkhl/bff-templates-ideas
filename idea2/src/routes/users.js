const UserController = require('../controllers/UserController');

const userRoutes = (Router) => {
  const router = Router();

  let uc = new UserController();

  router.get("/", uc.getUsers);

  router.post("/", uc.createUser);

  return router;
};

module.exports = userRoutes;
