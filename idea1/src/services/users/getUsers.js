module.exports = getUsers = () => {
  return new Promise((resolve, reject) => {
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
