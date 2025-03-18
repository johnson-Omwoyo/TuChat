const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Messages = require("./models/message");
const tables = require("./models/tableQueries");
const Conversation = require("./models/conversation");
const User = require("./models/user");
const Notification = require("./models/notifications");
const ConversationMember = require("./models/conversation_members");
const Friendship = require("./models/friendships");
const MessageStatus = require("./models/message_status");
const Message = require("./models/message");
const { where } = require("sequelize");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "my_password", // Your MySQL password
  database: "tuchat_db", // Your database name
});

// Check connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
    // createTables(); // Call function to create tables
  }
});

// Function to create tables if they don't exist
// function createTables() {
//   // Execute each table creation query
//   tables.forEach((query) => {
//     db.query(query, (err, result) => {
//       if (err) {
//         console.error("Error creating table:", err);
//       } else {
//         console.log("Table created or already exists.");
//       }
//     });
//   });
// }

//User routes
app.get("/users", async (req, res) => {
  const users = await User.findAll({
    attributes: ["name", "email", "avatar", "status"],
  });
  // console.log(users);

  res.send(users);
});
app.get("/user", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      res.send(user);
    } else {
      res.send("Invalid email");
    }
  } catch (error) {
    res.send("error getting user");
  }
});

app.post("/user", (req, res) => {
  const user = new User();
  const name = "Alice";
  const email = "aliceTrial@gmail.com";
  const password = "asasas";
  const avatar = "";
  const status = "offline";

  try {
    User.create({ name, email, password, avatar, status });
    res.send("added");
  } catch (error) {
    res.send("something went wrong when adding a user");
  }
});

// message Routes
app.get("/", (req, res) => {
  const messages = Messages.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.send(messages);
});
app.post("/", (req, res) => {
  const message = new Messages(2, 2, "thanks", "text", "none", 1010);
  Messages.create(message);
  res.send("want to add some data");
});
app.get("/conversations", (req, res) => {
  const conversations = Conversation.findAll();
  res.send(conversations);
});

// notification route

app.get("/notifications", (req, res) => {
  const notifications = Notification.findAll({ attributes: [""] });
  res.send(notifications);
});

// conversation members routes
app.get("/conversation_members", (req, res) => {
  const conversation_members = ConversationMember.findAll();
  res.send(conversation_members);
});

// conversation members routes
app.get("/conversation_members", (req, res) => {
  const conversation_members = ConversationMember.findAll();
  res.send(conversation_members);
});

// friendships routes
app.get("/conversation_members", (req, res) => {
  const friendships = Friendship.findAll();
  res.send(conversation_members);
});

// message status routes
app.get("/conversation_members", (req, res) => {
  const conversation_members = ConversationMember.findAll();
  res.send(conversation_members);
});

const message = Message.findAll();

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
