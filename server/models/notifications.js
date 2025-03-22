const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const Notification = sequelize.define(
  "notifications",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("message", "friend_request", "group_invite"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("unread", "read"),
      defaultValue: "unread",
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Avoid Sequelize's default timestamps
  }
);
Notification.sync()
  .then(() => {
    console.log("✅ notification sync success");
  })
  .catch(() => {
    console.log("❌ notification sync failed");
  });

module.exports = Notification;
