const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const Friendship = sequelize.define("friendships", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  receiver_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Reference to the users table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  status: {
    type: DataTypes.ENUM("pending", "accepted", "rejected"),
    defaultValue: "pending",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Avoid Sequelize's default timestamps
});
Friendship.sync()
  .then(() => {
    console.log("friendship sync success");
  })
  .catch(() => {
    console.log("friendship sync failed");
  });

module.exports = Friendship;
