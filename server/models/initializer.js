const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tuchat_db", "root", "my_password", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("some error");
  });

module.exports = sequelize ;
