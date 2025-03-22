const { DataTypes } = require("sequelize");
const sequelize = require("./initializer");

const ConversationMember = sequelize.define("conversation_members", {
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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Reference to the users table
      key: "id",
    },
    onDelete: "CASCADE",
  },
  joined_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Avoid Sequelize's default timestamps
});

ConversationMember.sync()
  .then(() => {
    console.log("✅ conversation member sync success");
  })
  .catch(() => {
    console.log("❌ conversation member sync failed");
  });
module.exports = ConversationMember;
