module.exports = addUser = (id) => {
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
