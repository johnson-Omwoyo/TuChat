const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const Conversation = sequelize.define("conversations", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM("private", "group"),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Reference to the users table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Avoid Sequelize's default createdAt and updatedAt
});
Conversation.sync()
  .then(() => {
    console.log("conversation sync success");
  })
  .catch(() => {
    console.log("conversation sync failed");
  });

module.exports = Conversation;
