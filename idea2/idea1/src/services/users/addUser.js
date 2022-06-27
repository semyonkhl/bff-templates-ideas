module.exports = addUser = (id) => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve([
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
    ]);
  });
};
