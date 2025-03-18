// const tables = [
//   `CREATE TABLE IF NOT EXISTS conversations (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       type ENUM('private', 'group') NOT NULL,
//       name VARCHAR(255) DEFAULT NULL,
//       created_by INT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
//     )`,

//   `CREATE TABLE IF NOT EXISTS conversation_members (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       conversation_id INT NOT NULL,
//       user_id INT NOT NULL,
//       joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     )`,

//   `CREATE TABLE IF NOT EXISTS messages (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       conversation_id INT NOT NULL,
//       sender_id INT NOT NULL,
//       content TEXT NOT NULL,
//       message_type ENUM('text', 'image', 'video', 'file') DEFAULT 'text',
//       file_url VARCHAR(255) DEFAULT NULL,
//       sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
//       FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
//     )`,

//   `CREATE TABLE IF NOT EXISTS message_status (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       message_id INT NOT NULL,
//       user_id INT NOT NULL,
//       status ENUM('sent', 'delivered', 'read') DEFAULT 'sent',
//       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//       FOREIGN KEY (message_id) REFERENCES messages(id) ON DELETE CASCADE,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     )`,

//   `CREATE TABLE IF NOT EXISTS friendships (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       sender_id INT NOT NULL,
//       receiver_id INT NOT NULL,
//       status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
//       FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
//     )`,

//   `CREATE TABLE IF NOT EXISTS notifications (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       user_id INT NOT NULL,
//       message VARCHAR(255) NOT NULL,
//       type ENUM('message', 'friend_request', 'group_invite') NOT NULL,
//       status ENUM('unread', 'read') DEFAULT 'unread',
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     )`,
// ];
// module.exports = tables;
