# MERN Chat App using Socket.io

## Overview
This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with **Socket.io** for real-time communication.

## Features
- User authentication (Sign up, Login, Logout)
- Real-time messaging using **Socket.io**
- Private and group chats
- Online/offline user status tracking
- MongoDB for data storage
- Responsive UI with React.js

## Technologies Used
### Frontend
- React.js
- Redux (for state management)
- Tailwind CSS / Material-UI (for styling)
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io (for real-time communication)
- JWT (for authentication)

## Installation
### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed.

### Clone the repository
```bash
git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app
```

### Backend Setup
```bash
cd server
npm install
```
Create a **.env** file in the `server/` directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
Run the server:
```bash
npm start
```

### Frontend Setup
```bash
cd client
npm install
npm start
```
The frontend will start on `http://localhost:3000/`.

## Usage
1. Sign up or log in.
2. Create/join a chat room.
3. Start real-time conversations.

## WebSocket Events
- `connection`: Establishes a socket connection.
- `join_room`: Joins a specific chat room.
- `send_message`: Sends a message in a chat.
- `receive_message`: Listens for incoming messages.
- `disconnect`: Handles user disconnection.

## Future Enhancements
- Implement typing indicators.
- Add file sharing support.
- Deploy to cloud platforms (e.g., Heroku, Vercel).

## Contributors
- [Unnati Rawat](https://github.com/unnatirawat19)

