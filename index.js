const server = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;

const sequelize = require("./src/db");

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
/* conn.sync({ force: true }).then(() => {
}); */
