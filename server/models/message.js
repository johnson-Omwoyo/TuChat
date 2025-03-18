const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const Message = sequelize.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  conversation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "conversations", // Reference to the conversations table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Reference to the users table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  message_type: {
    type: DataTypes.ENUM("text", "image", "video", "file"),
    defaultValue: "text",
  },
  file_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  sent_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Avoid Sequelize's default timestamps
});
Message.sync()
  .then(() => {
    console.log("message sync success");
  })
  .catch(() => {
    console.log("message sync failed");
  });

module.exports = Message;
