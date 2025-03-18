const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const MessageStatus = sequelize.define("message_status", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "messages", // Reference to the messages table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Reference to the users table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  status: {
    type: DataTypes.ENUM("sent", "delivered", "read"),
    defaultValue: "sent",
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW, // Reflects ON UPDATE behavior
  },
}, {
  timestamps: false, // Avoid Sequelize's default timestamps
});
MessageStatus.sync()
  .then(() => {
    console.log("ms sync success");
  })
  .catch(() => {
    console.log("ms sync failed");
  });

module.exports = MessageStatus;
