## **# 🌐 TuChat - Real-Time Chat Application**  
🚀 **TuChat** is a **real-time chat application** designed for fast, secure, and modern communication. Built with a **React.js frontend** and a **Node.js/Express.js backend**, TuChat provides a **seamless messaging experience** with authentication, email verification, and real-time messaging (coming soon).  

👨‍💻 Developed by: **Brian Muriungi & Johnson Omwoyo**  

---

## **📌 Project Overview**
TuChat is a **full-stack chat application** with the following core features:  

### ✅ **Frontend (React.js & Bootstrap)**
- **Modern UI** with smooth animations.
- **User Authentication (Login & Signup).**
- **Email Verification** before login.
- **Mobile-responsive design.**
- **Dark Mode** (Coming Soon).  
🔗 **Frontend Code:** [`/client`](./client)  

### ✅ **Backend (Node.js, Express.js & MySQL)**
- **User Authentication using JWT.**
- **Email Verification with Expiry.**
- **Secure Password Hashing.**
- **Socket.IO for Real-Time Chat** (Coming Soon).  
🔗 **Backend Code:** [`/server`](./server)  

### ✅ **Database (MySQL)**
- **Users Table** (Stores user details).  
- **Conversations Table** (Stores chat groups & private chats).  
- **Messages Table** (Stores all messages).  
- **Email Verification Table** (Stores tokens for email activation).  

---

## **📌 How TuChat Works**
### **1️⃣ User Authentication**
🔹 Users sign up with their **email & password**.  
🔹 A **verification link** is sent to their email.  
🔹 Once verified, they can **log in** and start chatting.  

### **2️⃣ Messaging System (Upcoming)**
🔹 Users can **start conversations** with friends.  
🔹 **Messages are stored** in the database.  
🔹 **Socket.IO will enable real-time chatting**.  

### **3️⃣ Friend Requests & Notifications (Future)**
🔹 Users can **send & accept friend requests**.  
🔹 Notifications alert users about **new messages & friend requests**.  

---

## **📌 How It Was Created**
### **Frontend Development (React.js)**
📌 The frontend was built using **React.js & Bootstrap** to create a **modern and responsive UI**.  

#### **Key Steps in Frontend Development:**
1. **React App Setup:**  
   ```sh
   npx create-react-app client
   cd client
   npm install bootstrap axios react-router-dom
   ```
2. **Designed UI:**  
   - Created **Landing Page, Login, and Registration** pages.  
   - Styled with **Bootstrap** for a clean look.  
3. **Connected to Backend:**  
   - Used **Axios** to make API requests.  
   - Implemented **Email Verification UI**.  
   - Handled authentication and **JWT token storage**.  

🔗 **Frontend Code:** [`/client`](./client)  

---

### **Backend Development (Node.js & Express.js)**
📌 The backend was developed using **Node.js & Express.js** to handle authentication, database operations, and API endpoints.  

#### **Key Steps in Backend Development:**
1. **Initialized a Node.js Server:**  
   ```sh
   mkdir server
   cd server
   npm init -y
   npm install express mysql2 dotenv bcrypt jsonwebtoken cors nodemailer
   ```
2. **Setup MySQL Database & User Table.**  
3. **Implemented User Authentication:**
   - **User Registration & Login** (with hashed passwords).  
   - **JWT Tokens for Secure Sessions**.  
4. **Added Email Verification:**
   - Sent **verification emails** using **Nodemailer**.  
   - Implemented **email activation tokens** in MySQL.  
5. **Prepared for Real-Time Messaging:**
   - Started working on **Socket.IO for live chat**.  

🔗 **Backend Code:** [`/server`](./server)  

---

## **📌 Collaboration Workflow**
We both worked **together on everything**, from **frontend and backend development** to **database design and API integration**.  

✅ **Shared Responsibilities:**  
- **Frontend:** React.js, Bootstrap, UI/UX, API Integration  
- **Backend:** Node.js, Express.js, MySQL, Authentication  
- **Database:** Table structuring, migrations, queries  
- **Testing & Debugging:** Fixed issues together for smooth functionality  
- **Deployment Planning:** Discussing future hosting options  

✅ **How We Managed Collaboration:**  
- Used **GitHub** for version control.  
- Regularly **merged updates & resolved conflicts**.  
- Reviewed each other’s **code & improvements**.  
- Communicated effectively to ensure smooth development.  

---

## **📌 Project Setup Guide**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/johnson-Omwoyo/TuChat.git
cd TuChat
```

### **2️⃣ Setup Backend**
```sh
cd server
npm install
npm run dev
```

### **3️⃣ Setup Frontend**
```sh
cd client
npm install
npm start
```

### **4️⃣ Open the App**
Visit **http://localhost:3000** to use **TuChat**! 🚀  

---

## **📌 Future Plans**
🔲 **Real-Time Messaging** with **Socket.IO**.  
🔲 **Profile Management & Avatars**.  
🔲 **Friend Requests & Contacts List**.  
🔲 **Chat History & Search Feature**.  
🔲 **Mobile App Version (React Native)**.  

---

## **📜 License**
MIT License - Feel free to use, contribute, and improve TuChat!  

👨‍💻 **Developed by:**  
- **Brian Muriungi** - [https://github.com/Bkimking/]
- **Johnson Omwoyo** - [https://github.com/johnson-Omwoyo/]
