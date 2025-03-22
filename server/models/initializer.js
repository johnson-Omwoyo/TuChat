const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tuchat_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log, // ✅ Shows executed SQL queries
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to MySQL"))
  .catch((err) => console.error("❌ Connection failed:", err));

module.exports = sequelize;
