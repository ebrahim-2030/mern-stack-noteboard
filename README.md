 ### 📝 MERN Stack Noteboard
 
A full-stack note-taking application built with the MERN stack: MongoDB, Express, React, and Node.js. Features include creating, updating, and deleting notes with confirmation modals, handling rate limits gracefully, and providing dynamic UI feedback using toast notifications. Styled with Tailwind CSS and enhanced with Lucide icons for a clean user experience.

---

## 🔗 Live Demo
👉 [View the Live App](https://mern-stack-noteboard.onrender.com/)  

--- 


## 🚀 Features

- 🗂 **Create, Read, Update, and Delete Notes**
- 🧾 **Modal confirmation** before deleting notes
- 🚦 **Rate limit handling** to avoid spamming the API
- 🧭 **Client-side routing** with smooth UX
- 🔥 **Toast notifications** for success and error messages
- 🎨 **Responsive design** using Tailwind CSS
- 📦 **Structured codebase** with separate frontend/backend folders

---

## 🛠️ Tech Stack

### Frontend:
- React
- Tailwind CSS
- React Router
- Axios
- react-hot-toast
- DaisyUI (optional component library)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS
- dotenv
- express-rate-limit

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js and npm
- MongoDB (local or cloud via MongoDB Atlas)

### 📁 Clone the repo

```bash
git clone https://github.com/ebrahim-2030/mern-stack-noteboard.git
cd mern-stack-noteboard

---

```
## 🧪 Environment Setup

### Backend `.env` File
Create a `.env` file inside the `/backend` directory with the following content:

```bash
MONGO_URI = your_mongo_uri
PORT = 5001
UPSTASH_REDIS_REST_URL = your_redis_rest_uri
UPSTASH_REDIS_REST_TOKEN = your_redis_rest_uri
NODE_ENV = development  

```

## 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev

```

## 💻  Backend Setup

```bash
cd frontend
npm install
npm run dev

```

### 😊 HAPPY CODING!


