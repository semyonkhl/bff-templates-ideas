class UserService {
  constructor() {}

  addUser() {
    //const { body } = req;

    return {
      data: {
        name: "Semyon",
        email: "sfef@gmail.com",
        password: "sdeedssde",
      },
    };
  }

  getUsers() {
    // optional pagination

    // const {
    //   queryParams: { limit, page },
    // } = req;
    
    return {
      data: [
        {
          name: "Semyon",
          email: "sfef@gmail.com",
          password: "sdeedssde",
        },
        {
          name: "Semyon",
          email: "sfef@gmail.com",
          password: "sdeedssde",
        },
        {
          name: "Semyon",
          email: "sfef@gmail.com",
          password: "sdeedssde",
        },
      ],
    };
  }
}

module.exports = UserService;
