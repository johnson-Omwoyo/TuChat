# TuChat Server

## Overview
This is the backend server for TuChat, a real-time chat application. It handles user authentication, messaging, and database operations using MySQL.

## Technologies Used
- **Node.js** (Runtime)
- **Express.js** (Backend framework)
- **MySQL2** (Database connector)
- **Cors** (Cross-origin resource sharing)
- **Dotenv** (Environment variable management)

## Setup & Installation
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install MySQL and create a database named `tuchat_db`

### Installation Steps
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

## Database Schema
The following tables have been created:

1. **Users (`users`)** - Stores user details.
2. **Conversations (`conversations`)** - Stores chat groups & private chats.
3. **Conversation Members (`conversation_members`)** - Links users to conversations.
4. **Messages (`messages`)** - Stores chat messages.
5. **Message Status (`message_status`)** - Tracks message read status.
6. **Friendships (`friendships`)** - Handles friend requests.
7. **Notifications (`notifications`)** - Stores user notifications.

## API Endpoints (Implemented)
### General
- `GET /` → Server status check.

### Database Connection
- MySQL connection established and verified.

### Next Steps
- Implement **User Authentication (Register/Login) with JWT**.
- Develop **Messaging API** for sending and receiving messages.
- Integrate **Socket.IO** for real-time messaging.

## License
MIT License

