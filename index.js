const express = require('express');
const app = express();
const router = require("./src/routes/routes");


app.use("/api", router);
const sequelize = require("./src/db");


sequelize.sync({force: false}).then(()=>{
      app.listen(3001, () => {
            console.log("Listening on port 3001");
      });
})
/* conn.sync({ force: true }).then(() => {
}); */
