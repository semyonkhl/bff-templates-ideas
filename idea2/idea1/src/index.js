const { App } = require("./app");
const app = new App();

const PORT = process.env.PORT || 8000;

app.app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
