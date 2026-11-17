<div align="center">

# 🚀 Beginner Full-Stack (MERN) Projects Masterclass

### Curated, Production-Ready Full-Stack Web Projects for Beginners & Job Seekers

*Build real-world full-stack applications step-by-step using **MongoDB, Express.js, React, and Node.js**.*

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/dev-dailydebugging/beginner-javascript-projects/pulls)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20%2F%20Local-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

<br/>

[📚 Project Catalog](#-curated-projects-catalog) • [🏛️ MERN Architecture](#-mern-stack-architecture-flow) • [⚙️ Quick Setup](#%EF%B8%8F-global-prerequisites--quickstart) • [🗺️ Learning Roadmap](#%EF%B8%8F-recommended-learning-path) • [🤝 Contributing](#-how-to-contribute)

---

</div>

## 💡 Why This Repository?

Transitioning from writing isolated JavaScript functions to building full-stack applications is often the hardest hurdle for self-taught developers and boot campers. 

Most online tutorials either leave out the backend or skip critical best practices like **environment variable management, REST API status codes, CORS configuration, and asynchronous state handling**.

Every project in this repository includes:
- ✅ **Complete, Running Code:** Full React client (`client/`) and Node/Express server (`server/`).
- 📖 **Comprehensive Walkthroughs:** Step-by-step explanations of both frontend and backend mechanics.
- 🎯 **Key Learning Takeaways:** Direct insights into why particular architectures and patterns were selected.
- 🧪 **Postman / cURL API Specs:** Ready-to-test endpoint documentation with example JSON payloads.
- 🚀 **Extension Challenges:** Concrete ideas to help you expand each app and make it uniquely yours for your portfolio.

---

## 🏛️ MERN Stack Architecture Flow

Here is how data flows in all projects across this repository:

```
┌────────────────────────────────────────────────────────────────────────┐
│                          CLIENT TIER (React)                           │
│  Components ──► State (useState / useEffect) ──► Axios / Fetch API    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP Request (JSON / Headers)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        API SERVER (Express & Node)                     │
│  CORS / JSON Parser ──► Routes ──► Controllers ──► Mongoose Models     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Database Query (CRUD)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       DATABASE TIER (MongoDB)                          │
│         BSON Collections & Documents (Local or MongoDB Atlas)          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📚 Curated Projects Catalog

| # | Project Name | Focus & Highlights | Difficulty | Live Preview | Directory |
| :-: | :--- | :--- | :-: | :-: | :-: |
| **01** | [**TaskFlow**](./01-taskflow-todo-app/) | Full CRUD, REST API conventions, Mongoose Schemas, Optimistic UI updates | 🟢 Beginner | [Demo](#) | [`/01-taskflow-todo-app`](./01-taskflow-todo-app/) |
| **02** | [**ExpensePulse**](./02-expense-tracker/) | Income vs Expense calculations, Date filtering, Category aggregates, Stats dashboard | 🟢 Beginner | [Demo](#) | [`/02-expense-tracker`](./02-expense-tracker/) |
| **03** | [**DevSnap Blog**](./03-dev-snippet-blog/) | Multi-field search, Tags filtering, Pagination, Code snippet syntax preview | 🟡 Easy-Mid | [Demo](#) | [`/03-dev-snippet-blog`](./03-dev-snippet-blog/) |
| **04** | [**AuthVault**](./04-authvault-jwt-system/) | User registration/login, Bcrypt password hashing, JWT authentication, Protected routes | 🟡 Easy-Mid | [Demo](#) | [`/04-authvault-jwt-system`](./04-authvault-jwt-system/) |
| **05** | [**BookNook**](./05-book-review-hub/) | Relational collections (Users & Reviews), Star ratings, Mongoose `.populate()` | 🔴 Intermediate | [Demo](#) | [`/05-book-review-hub`](./05-book-review-hub/) |

---

## ⚙️ Global Prerequisites & Quickstart

### Prerequisites
Before running any project, ensure you have installed:
1. **Node.js** (v18.0 or later): [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node) or **yarn / pnpm**
3. **MongoDB**:
   * Option A (Easiest): Free cloud database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   * Option B: [MongoDB Community Server](https://www.mongodb.com/try/download/community) running locally on `mongodb://127.0.0.1:27017`.

---

### Universal 3-Step Setup for Any Project

Each project is split into two folders: `server` and `client`.

```bash
# 1. Clone this repository
git clone https://github.com/dev-dailydebugging/beginner-javascript-projects.git
cd beginner-javascript-projects

# 2. Start the Backend Server (e.g., in Project 01)
cd 01-taskflow-todo-app/server
npm install
cp .env.example .env     # Add your MongoDB connection string
npm run dev

# 3. In a new terminal window, start the Frontend Client
cd 01-taskflow-todo-app/client
npm install
npm run dev
```

Your React frontend will be live at `http://localhost:5173` and connected to the backend API at `http://localhost:5000`.

---

## 🗺️ Recommended Learning Path

Follow this sequential roadmap to build mastery without skipping steps:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FULL-STACK MASTERY ROADMAP                           │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
       ┌──────────────────────────────────────────────────────────┐
       │ Step 1: Master Pure CRUD Operations                     │
       │ Project: 01-TaskFlow (Todos & Notes)                     │
       │ Skills: Express routing, Mongoose create/read/update/del │
       └────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
       ┌──────────────────────────────────────────────────────────┐
       │ Step 2: Numerical Computations & Aggregations           │
       │ Project: 02-ExpensePulse (Expense Tracker)               │
       │ Skills: Data filtering, Calculations, Category totals    │
       └────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
       ┌──────────────────────────────────────────────────────────┐
       │ Step 3: Complex Querying & Search Filters                │
       │ Project: 03-DevSnap (Developer Blog & Snippets)          │
       │ Skills: Query parameters (?tag=react&search=hooks), Sort │
       └────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
       ┌──────────────────────────────────────────────────────────┐
       │ Step 4: Security, Authentication & State Protection      │
       │ Project: 04-AuthVault (JWT Auth System)                  │
       │ Skills: Hashing with bcrypt, JWT token issuing, Context  │
       └────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
       ┌──────────────────────────────────────────────────────────┐
       │ Step 5: Multi-Model Relationships & Production Polish    │
       │ Project: 05-BookNook (Book & Review Hub)                 │
       │ Skills: Mongoose references, Populating, Star ratings    │
       └──────────────────────────────────────────────────────────┘
```

---

## 🎯 Project Highlight: What You Will Learn in Project 01 (TaskFlow)

Here is a quick snapshot of how each project is structured:

### Backend API Endpoints (Express & MongoDB)
| Method | Endpoint | Description | Success Code |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/tasks` | Fetch all tasks (supports query `?completed=true`) | `200 OK` |
| `POST` | `/api/tasks` | Create a new task (`{ title, description, priority }`) | `201 Created` |
| `PUT` | `/api/tasks/:id` | Update task status or text | `200 OK` |
| `DELETE` | `/api/tasks/:id` | Remove a task permanently | `200 OK` |

### Frontend UI Stack (React + Vite)
- Clean, responsive glassmorphic cards with inline completion toggling.
- Asynchronous API client layer with error banners and loading spinners.
- Form validation preventing empty submissions.

---

## 🤝 How to Contribute

We welcome contributions of all levels! You can contribute by:
1. Adding new beginner-friendly projects (e.g. Chat app, Weather dashboard).
2. Improving documentation and fixing typos.
3. Adding CSS styling or accessibility improvements to existing projects.

Please check [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.

<div align="center">

Built with ❤️ by [dev-dailydebugging](https://github.com/dev-dailydebugging) • Give a ⭐ if this repo helped you!

</div>
