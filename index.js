const server = require("./src/app");
const { conn } = require("./src/db");

server.listen(3001, () => {
  console.log("listening on port 3001");
});
/* conn.sync({ force: true }).then(() => {
}); */
