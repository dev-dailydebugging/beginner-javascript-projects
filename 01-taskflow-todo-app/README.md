# 01 • TaskFlow: Full-Stack MERN Todo & Productivity App

A complete, production-ready Full-Stack Task & Productivity management application built with **React (Vite), Express.js, Node.js, and MongoDB (Mongoose)**.

<div align="center">

[![Difficulty](https://img.shields.io/badge/Difficulty-Beginner%20Friendly-brightgreen.svg?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-MERN-blue.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

</div>

---

## 📖 Table of Contents
- [What You Will Build](#-what-you-will-build)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Project File Structure](#-project-file-structure)
- [Quick Start Guide](#-quick-start-guide)
- [REST API Documentation & cURL](#-rest-api-documentation--curl)
- [Key Learning Takeaways](#-key-learning-takeaways)
- [Challenges to Level Up](#-challenges-to-level-up)

---

## 🎯 What You Will Build

A modern task manager that persists data in MongoDB:
- **Create Tasks:** Title, description, and color-coded priority levels (`low`, `medium`, `high`).
- **Real-Time Counters:** Instant summary of total, pending, and completed tasks.
- **Filtering:** Toggle between *All*, *Pending*, and *Completed* tasks via query parameters.
- **Optimistic UI Updates:** Instant check-off and deletion without UI flicker.
- **Graceful Error Handling:** In-app banners when backend connectivity drops.

---

## 🏛️ Architecture & Data Flow

```
[User Action in React UI]
           │
           ▼
[api.js (fetch wrapper)] ──(HTTP JSON)──► [Express Server :5000]
                                                  │
                                                  ▼
                                         [taskRoutes.js]
                                                  │
                                                  ▼
                                       [taskController.js]
                                                  │
                                                  ▼
                                         [Task Model (Mongoose)]
                                                  │
                                                  ▼
                                         [MongoDB Database]
```

---

## 📁 Project File Structure

```
01-taskflow-todo-app/
├── client/                     # Frontend (React 18 + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx    # Controlled form for task creation
│   │   │   ├── TaskItem.jsx    # Single task card with actions
│   │   │   └── TaskList.jsx    # List rendering with filter pills
│   │   ├── services/
│   │   │   └── api.js          # Reusable fetch client with error normalization
│   │   ├── App.jsx             # Root container managing state & stats
│   │   ├── index.css           # Modern design system & CSS variables
│   │   └── main.jsx            # React root mount
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend (Node.js + Express + Mongoose)
│   ├── controllers/
│   │   └── taskController.js   # Request handlers and business logic
│   ├── models/
│   │   └── Task.js             # Mongoose schema with validations
│   ├── routes/
│   │   └── taskRoutes.js       # Express router endpoints
│   ├── .env.example            # Sample environment variables
│   ├── package.json
│   └── server.js               # Express app initialization & DB connection
└── README.md                   # Step-by-step project guide
```

---

## ⚡ Quick Start Guide

### Step 1: Set Up and Start the Backend Server

```bash
cd server

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start server in development mode (hot-reloads with nodemon)
npm run dev
```

*Expected Terminal Output:*
```text
✅ Connected to MongoDB successfully
🚀 TaskFlow Server running on http://localhost:5000
```

> **Note:** If you do not have MongoDB installed locally, create a free database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and replace `MONGODB_URI` in `.env`.

---

### Step 2: Set Up and Start the Frontend Client

Open a **new terminal tab** and run:

```bash
cd client

# Install frontend dependencies
npm install

# Start Vite dev server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## 📡 REST API Documentation & cURL

### 1. Fetch All Tasks
```bash
curl -X GET http://localhost:5000/api/tasks
```
*Filter by status or priority using query parameters:*
```bash
curl -X GET "http://localhost:5000/api/tasks?completed=false&priority=high"
```

### 2. Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Study React hooks and dependency arrays",
    "description": "Understand useEffect cleanup and memoization",
    "priority": "high"
  }'
```

### 3. Update / Toggle a Task
```bash
curl -X PUT http://localhost:5000/api/tasks/<TASK_ID> \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### 4. Delete a Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/<TASK_ID>
```

---

## 💡 Key Learning Takeaways

### 1. MVC Separation of Concerns
Instead of writing database queries directly in the route file, we isolate logic into:
* **`models/Task.js`**: Schema validation & database contracts.
* **`controllers/taskController.js`**: Request parsing, business rules, and HTTP response codes.
* **`routes/taskRoutes.js`**: Clean mapping between HTTP verbs and controller functions.

### 2. Optimistic UI Updates in React
Notice how `handleToggleStatus` in `App.jsx` works:
```javascript
// 1. Instantly update the React UI for 0ms lag
setTasks((prev) =>
  prev.map((t) => (t._id === id ? { ...t, completed: newStatus } : t))
);

// 2. Perform background network sync
await taskApi.update(id, { completed: newStatus });
```
If the network request fails, we revert the state back, giving users an instant desktop-like feel.

### 3. Decoupled API Service Layer (`services/api.js`)
Components never call `fetch('http://localhost:5000/api/...')` directly. Abstracting API calls into a helper file makes migrating to `axios` or switching backend URLs trivial.

---

## 🚀 Challenges to Level Up

Want to make this project uniquely yours for your resume? Try implementing these 4 enhancements:

- [ ] **Challenge 1: Inline Editing**  
  Add a pencil icon to each task card allowing users to update the title or description inline without deleting.
- [ ] **Challenge 2: Due Dates & Overdue Badges**  
  Add a `dueDate: Date` field to the Mongoose schema. In the React UI, highlight overdue tasks with a pulsating red badge.
- [ ] **Challenge 3: Search Bar with Debounce**  
  Add an input field at the top of the task list that filters tasks by keywords with a 300ms debounce.
- [ ] **Challenge 4: Drag and Drop Reordering**  
  Add `@hello-pangea/dnd` to reorder tasks and persist their custom order index in MongoDB.

---

[⬅ Back to Main Repository Catalog](../README.md)
