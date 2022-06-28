const appServer = require("./app");
const PORT = process.env.PORT || 8000;

(() => {
  try {
    const app = appServer();
    app.listen(PORT, () =>
      console.log(`Listening on ${PORT} `)
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
})();