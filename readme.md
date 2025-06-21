# Real-Time Chat Application

A simple real-time chat application built using **React**, **WebSocket**, and **Express.js**. This assignment focuses on implementing core concepts like socket communication, React state management, and responsive UI layout.

## 🔧 Features

- **User Persistence:** Username is saved in `localStorage`, so users stay logged in even after refreshing the page.
- **Message History:** The backend returns the **last 50 messages** when a user joins.
- **Shared Chat Room:** It's a global chatroom – all users are in the same room and can see each other's messages in real-time.
- **Real-Time Messaging:** Messages are sent and received instantly via WebSocket.
- **Responsive UI:** Clean and responsive layout that works on all screen sizes.
- **Logout Support:** Users can log out to reset their session and re-enter a different name.

## 📁 Project Structure

frontend/
├── src/
│ ├── components/
│ │ ├── ChatWindow.jsx
│ │ ├── MessageForm.jsx
│ │ └── UserForm.jsx
│ ├── App.jsx
│ └── utils/
│ └── websocket.js
backend/
├── src/
| ├── model
| └── messageSchema.js
| ├── config
| └── connect.js
| ├── index.js
| └── utils/
| └── webSocket.js
└── readme.md

## ⚙️ Tech Stack

- **Frontend:** React, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Communication:** WebSocket (`ws` package)

## 🌐 Live Demo

**Backend Live URL:** [backend_URL](https://real-time-shareroom-chat-app.onrender.com);
**Frontend Live URL:** [Frontend_URL](https://real-time-share-room-chat-app.vercel.app/);

## 🚀 Getting Started

### Prerequisites

- Node.js installed

### Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/Vishesh-21/Real-Time-ShareRoom-Chat-App-.git
cd chat-app
```

#### 2. Start the server

```bash
cd server
npm install
node index.js
```

#### 3. Start the client

```bash
cd client
npm install
npm start
```

## 📸 Screenshots

Add screenshots here showing:

#### 1. The initial user form

![ADD User Page](/frontend/public/addUser.png)

#### 3. Real-time messaging

![Chats](/frontend/public/chatMessage.png)

## 📚 Concepts Practiced

- React component composition

- useState & useEffect hooks

- WebSocket connection and lifecycle handling

- Express basic setup

- Cross-origin handling with cors

- Responsive layout using Tailwind

## ✍️ Author

Vishesh Verma
MERN Stack Intern | Passionate Web Developer
