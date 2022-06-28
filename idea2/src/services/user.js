const getUsers = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve({
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
    });
  });
};

const addUser = (id) => {
  return new Promise((resolve, reject) => {
    //
    // post update here...
    //

    resolve({
      data: {
        name: "Semyon",
        email: "sfef@gmail.com",
        password: "sdeedssde",
      },
    });
  });
};

module.exports = { addUser, getUsers };
