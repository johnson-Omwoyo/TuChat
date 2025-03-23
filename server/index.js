const express = require("express");
const mysql = require("mysql2/promise"); // Use promise-based MySQL
const cors = require("cors");
const { Sequelize } = require("sequelize");

require("dotenv").config();

const Messages = require("./models/message");
const tables = require("./models/tableQueries");
const Conversation = require("./models/conversation");
const User = require("./models/user");
const Notification = require("./models/notifications");
const ConversationMember = require("./models/conversation_members");
const Friendship = require("./models/friendships");
const MessageStatus = require("./models/message_status");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ 
  origin: "http://localhost:5173", // Allow frontend
  credentials: true // Allow cookies if needed
}));
app.use(express.json());


// MySQL Connection using MySQL2 (Promise)
const db = mysql.createPool({
  host: "localhost",
  user: "root", // MySQL username
  password: "", // No password for PHPMyAdmin
  database: "tuchat_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


// Function to create tables if they don't exist
async function createTables() {
  try {
    const connection = await db.getConnection();
    console.log("Connected to MySQL database!");

    if (Array.isArray(tables)) {
      for (const query of tables) {
        await connection.query(query);
      }
    } else {
      for (const query of Object.values(tables)) {
        await connection.query(query);
      }
    }
    connection.release();
    console.log("Tables created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

// Check database connection
db.getConnection()
  .then((connection) => {
    console.log("Connected to MySQL database!");
    connection.release();
    createTables();
  })
  .catch((err) => console.error("Database connection failed:", err));

// Import routes
const userRoutes = require("./routes/user");
// const messageRoutes = require("./routes/messages");
// const conversationRoutes = require("./routes/conversations");
// const notificationRoutes = require("./routes/notifications");
// const conversationMemberRoutes = require("./routes/conversation_members");
// const friendshipRoutes = require("./routes/friendships");
// const messageStatusRoutes = require("./routes/message_status");

// Use routes
app.use("/api/user", userRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/conversations", conversationRoutes);
// app.use("/api/notifications", notificationRoutes);
// app.use("/api/conversation_members", conversationMemberRoutes);
// app.use("/api/friendships", friendshipRoutes);
// app.use("/api/message_status", messageStatusRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
