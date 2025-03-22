### **📌 Updated TuChat Backend**
```md
# TuChat Server

## Overview
This is the backend server for **TuChat**, a **real-time chat application**. It handles **user authentication, email verification, messaging, and database operations** using **MySQL**.

---

## 📌 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for handling API requests
- **MySQL2** - Database connector for MySQL
- **Cors** - Cross-origin resource sharing for frontend-backend communication
- **Dotenv** - Environment variable management
- **Bcrypt** - Secure password hashing
- **JSON Web Token (JWT)** - User authentication & session management
- **Nodemailer** - Email service for sending verification emails

---

## 📌 Features Implemented
### ✅ **User Authentication**
- **Registration & Login** with JWT-based authentication.
- **Password Validation**: Password must contain at least:
  - **6 characters**
  - **1 digit**
  - **1 uppercase letter**
  - **1 lowercase letter**
  - **1 special character**
- **Email Verification**:
  - Users receive a verification email upon registration.
  - Accounts must be verified before login.
  - Email verification tokens expire after **24 hours**.

### ✅ **Database Integration**
- **MySQL** database setup with proper schema.
- **User authentication & chat data storage**.

### ✅ **Real-time Communication (Work in Progress)**
- **Socket.IO** will be integrated for **real-time messaging**.

---

## 📌 Setup & Installation
### 🔧 **Prerequisites**
- Install [Node.js](https://nodejs.org/)
- Install **MySQL** and create a database named `tuchat_db`

### 🚀 **Installation Steps**
1. Clone the repository:
   ```sh
   git clone https://github.com/johnson-Omwoyo/TuChat.git
   cd TuChat/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

---

## 📌 Database Schema
The following tables are included:

1. **Users (`users`)** - Stores user details.
2. **Conversations (`conversations`)** - Stores chat groups & private chats.
3. **Conversation Members (`conversation_members`)** - Links users to conversations.
4. **Messages (`messages`)** - Stores chat messages.
5. **Message Status (`message_status`)** - Tracks message read status.
6. **Friendships (`friendships`)** - Handles friend requests.
7. **Notifications (`notifications`)** - Stores user notifications.
8. **Email Verification (`email_verifications`)** - Stores email verification tokens.

---

## 📌 API Endpoints (Implemented)
### **General**
- `GET /` → Server status check.

### **User Authentication**
- `POST /api/auth/register` → User registration with email verification.
- `POST /api/auth/login` → User login (only if email is verified).
- `GET /api/auth/verify/:token` → Email verification endpoint.

### **Database Connection**
- MySQL connection established and verified.

---

## 📌 Next Steps
### 🔲 **Real-Time Messaging**
- Implement **Socket.IO** for live chat.
- Sync messages across **multiple users & devices**.

### 🔲 **Password Reset Feature**
- Allow users to reset their password via **email link**.

### 🔲 **User Profile & Settings**
- Add options for **profile customization** (avatar, status, etc.).

### 🔲 **Advanced Security**
- Implement **two-factor authentication (2FA)**.
- Enhance **JWT session management**.

---

## 📜 License
MIT License - Feel free to use and modify the project.
```

---

### **🛠️ What's Updated?**
✅ **Added Email Verification Feature**  
✅ **Updated API Endpoints** (Register now includes email verification)  
✅ **Included `.env` setup for email credentials**  
✅ **Outlined Password Validation Rules**  
✅ **Mentioned Future Features (Password Reset, 2FA, etc.)**  

---