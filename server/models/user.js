const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: true,
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // New users are unverified by default
    },
    verification_token: {
      type: DataTypes.STRING(255),
      allowNull: true, // Can be null after verification
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    status: {
      type: DataTypes.ENUM("online", "offline"),
      defaultValue: "offline",
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Prevent Sequelize from adding its own createdAt and updatedAt
  }
);

User.sync()
  .then(() => {
    console.log("✅ user sync success");
  })
  .catch(() => {
    console.log("❌ user sync failed");
  });

module.exports = User;
