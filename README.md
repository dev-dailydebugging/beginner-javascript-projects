<div align="center">

# 🌐 Full-Stack Web Projects Hub

### *The Ultimate Collection of Production-Ready Frontend, Backend & MERN Projects*

<p align="center">
  <a href="https://www.linkedin.com/in/dev-dailydebugging/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/dev-dailydebugging"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
</p>

<p align="center">
  <b>Production-ready Full-Stack projects you can actually run — clone, customize, ship.</b><br/>
  <i>MERN Stack · React · Node.js · Express · MongoDB · JWT Auth · REST APIs · Machine Coding</i>
</p>

<br/>

<a href="#-quick-start"><kbd>&nbsp; 🚀 Quick Start &nbsp;</kbd></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-project-catalog"><kbd>&nbsp; 📂 Browse Projects &nbsp;</kbd></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-table-of-contents"><kbd>&nbsp; 📑 Table of Contents &nbsp;</kbd></a>

</div>

---

## 💡 Why This Exists

You shouldn't have to build the same CRUD backend, JWT auth flow, or Mongoose schema from scratch every time you start a new project.

**Full-Stack Web Projects Hub is a cookbook of ready-to-run MERN templates** — starter code you can fork, customize, and ship as a portfolio-worthy full-stack app. Every project here is self-contained with full source code and a step-by-step walkthrough.

> - 🛠️ **Hand-built, not curated** — every project is original work, tested end-to-end.
> - 🧪 **Runs in 3 commands** — no broken `npm install`, no "figure it out yourself" setup.
> - 🧠 **Modern web stack** — React 18, Express 4, MongoDB 7, Vite 5, JWT, bcrypt.
> - 🌐 **Concept-first** — every project introduces exactly one new architectural concept.
> - 📚 **Step-by-step walkthroughs** — every project has a full README with API docs and cURL examples.
> - 💸 **MIT Licensed** — fork it, ship it, put it on your resume. No paywall, no signup.

> ⭐ **If this saves you time, [star the repo](https://github.com/dev-dailydebugging/beginner-javascript-projects/stargazers) — that's how the next developer discovers it.**

---

## 🚀 Quick Start

Run your first full-stack app in **under 2 minutes**. Just clone, install, and run:

```bash
git clone https://github.com/dev-dailydebugging/beginner-javascript-projects.git
cd beginner-javascript-projects/01-taskflow-todo-app/server
npm install && cp .env.example .env
npm run dev
# In a new terminal:
cd ../client && npm install && npm run dev
```

Open **`http://localhost:5173`** — your React frontend connected to a live Express + MongoDB backend.

---

## 🔥 Featured Projects

<div align="center">

| 🏆 Project | 📝 What it builds | 🛠️ Stack |
|:---|:---|:---|
| **[⚡ TaskFlow Todo App](./01-taskflow-todo-app/)** | Full CRUD task manager with priority levels & optimistic UI | `React + Express + MongoDB` |
| **[💰 ExpensePulse Tracker](./02-expense-tracker/)** | Income vs expense dashboard with real-time balance summary | `React + Express + Aggregations` |
| **[📝 DevSnap Blog](./03-dev-snippet-blog/)** | Developer blog with text search, tag filters & pagination | `React + Express + Regex Search` |
| **[🔐 AuthVault JWT System](./04-authvault-jwt-system/)** | Complete login/register system with bcrypt & JWT auth | `React + JWT + bcrypt + Middleware` |
| **[📚 BookNook Review Hub](./05-book-review-hub/)** | Book reviews with user relationships & star ratings | `React + Mongoose populate() + Refs` |

</div>

> 📌 **Complete them in order** — each project builds exactly one new concept on top of the last.

---

## 📑 Table of Contents

### 🟢 Beginner Projects
- [⚡ TaskFlow — Full CRUD App](#-taskflow--core-crud-operations)
- [💰 ExpensePulse — Finance Tracker](#-expensepulse--finance--aggregations)

### 🟡 Easy → Mid Projects
- [📝 DevSnap Blog — Search & Pagination](#-devsnap-blog--search-pagination--query-params)
- [🔐 AuthVault — JWT Authentication](#-authvault--jwt-authentication--security)

### 🔴 Intermediate Projects
- [📚 BookNook — Relational Data & Populate](#-booknook--relational-data--mongoose-populate)

### 🛠 Concepts & Reference
- [🏛 MERN Architecture](#-mern-stack-architecture)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Repo Structure](#-repository-structure)

---

## 📂 Project Catalog

### 🟢 TaskFlow — Core CRUD Operations

<details open>
<summary><b>⚡ 01 — TaskFlow: Full-Stack Task & Productivity Manager</b></summary>
<br/>

**What you build:** A complete task manager where users can create, update, delete, and filter tasks by status and priority. Data persists in MongoDB.

| Concept | What you learn |
|:---|:---|
| REST API CRUD | `GET`, `POST`, `PUT`, `DELETE` with correct HTTP status codes |
| MVC Architecture | Separating `routes/`, `controllers/`, `models/` for scalability |
| Mongoose Schema | `required`, `enum`, `trim`, `default`, `timestamps` |
| React State Management | `useState`, `useEffect`, lifting state up between components |
| Optimistic UI | Update the UI instantly before the API responds — revert on failure |
| CORS + dotenv | Secure cross-origin setup with environment variable management |

**Key files:**
- [`server/models/Task.js`](./01-taskflow-todo-app/server/models/Task.js) — Mongoose schema with validation
- [`server/controllers/taskController.js`](./01-taskflow-todo-app/server/controllers/taskController.js) — All 5 CRUD handlers
- [`client/src/services/api.js`](./01-taskflow-todo-app/client/src/services/api.js) — Reusable fetch client

📖 [Full Walkthrough & API Docs →](./01-taskflow-todo-app/README.md)

</details>

<br/>

### 🟢 ExpensePulse — Finance & Aggregations

<details>
<summary><b>💰 02 — ExpensePulse: Personal Finance & Budget Tracker</b></summary>
<br/>

**What you build:** A financial dashboard where users log income and expenses by category. The backend computes a live net balance summary on every request.

| Concept | What you learn |
|:---|:---|
| Server-side Aggregation | Computing `totalIncome`, `totalExpense`, `balance` using `.reduce()` in Node |
| Query Parameters | Filtering by `?type=income` or `?category=Food` via `req.query` |
| Dynamic Category Enums | Switching form fields based on transaction type (income vs expense) |
| Computed API Responses | Returning both raw data (`data`) and computed stats (`summary`) in one response |

📖 [Full Walkthrough →](./02-expense-tracker/README.md)

</details>

<br/>

### 🟡 DevSnap Blog — Search, Pagination & Query Params

<details>
<summary><b>📝 03 — DevSnap Blog: Developer Blog & Code Snippet Platform</b></summary>
<br/>

**What you build:** A multi-author blog platform with server-side search using MongoDB regex, multi-tag filtering, and paginated results.

| Concept | What you learn |
|:---|:---|
| MongoDB Text Search | Case-insensitive regex search on title and body fields |
| Pagination | `?page=2&limit=10` using `.skip()` and `.limit()` on Mongoose queries |
| Multi-filter Queries | Stacking `?tag=react&sort=newest` params simultaneously |
| `$in` Operator | Filter posts matching any of multiple tags using MongoDB `$in` |

📖 [Full Walkthrough →](./03-dev-snippet-blog/README.md)

</details>

<br/>

### 🟡 AuthVault — JWT Authentication & Security

<details>
<summary><b>🔐 04 — AuthVault: Full JWT Authentication System</b></summary>
<br/>

**What you build:** A complete user registration and login system. Passwords are hashed with bcrypt. On login, a signed JWT is returned and stored client-side. Protected API routes verify the token via Express middleware before allowing access.

| Concept | What you learn |
|:---|:---|
| bcrypt Password Hashing | One-way hashing with configurable salt rounds — never store plain text |
| JWT Sign & Verify | `jwt.sign()` on login, `jwt.verify()` in middleware on every protected call |
| Express Auth Middleware | `protect.js` middleware that rejects requests without a valid Bearer token |
| React Auth Context | `AuthContext` + `useContext` for sharing login state across all components |
| Protected Routes | Client-side `<PrivateRoute>` that redirects unauthenticated users to `/login` |

📖 [Full Walkthrough →](./04-authvault-jwt-system/README.md)

</details>

<br/>

### 🔴 BookNook — Relational Data & Mongoose Populate

<details>
<summary><b>📚 05 — BookNook: Book Review Hub with User Relationships</b></summary>
<br/>

**What you build:** A book review platform where authenticated users can submit star-rated reviews. Books and reviews are stored in separate collections linked by MongoDB ObjectId references.

| Concept | What you learn |
|:---|:---|
| Mongoose Document References | `ref: 'User'` and `ObjectId` to link collections (like a SQL foreign key) |
| `.populate()` | Join user data into book/review queries in a single Mongoose call |
| Rating Aggregation | Compute average star rating using MongoDB `$avg` with `aggregate()` |
| Auth-Gated Writes | Only logged-in users (from Project 04) can submit reviews |

📖 [Full Walkthrough →](./05-book-review-hub/README.md)

</details>

---

## 🏛 MERN Stack Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CLIENT TIER  (React 18 + Vite)                   │
│                                                                     │
│   Pages ──► Components ──► Custom Hooks                             │
│                                  │                                  │
│                            API Service Layer (services/api.js)      │
│                                  │                                  │
│                        fetch() with JSON + Auth headers             │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │  HTTP Request
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   SERVER TIER  (Node.js + Express)                  │
│                                                                     │
│   server.js                                                         │
│   ├── Middleware: cors(), express.json(), dotenv                    │
│   └── Routes  ──► Controllers  ──► Mongoose Models                  │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │  Mongoose Query (ODM)
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  DATABASE TIER  (MongoDB Atlas / Local)             │
│                                                                     │
│   Collections: tasks · transactions · posts · users · books        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

| Layer | Technology | Version | Purpose |
|:---:|:---|:---:|:---|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) | **React** | 18+ | UI Component Library |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) | **Vite** | 5+ | Build Tool & Dev Server |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | **Node.js** | 18+ | JavaScript Runtime |
| ![Express](https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white) | **Express** | 4.x | REST API Framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | **MongoDB** | 7+ | NoSQL Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | **Mongoose** | 8+ | ODM — Schemas & Validation |
| ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | **jsonwebtoken** | 9+ | Authentication (Project 04+) |
| ![bcrypt](https://img.shields.io/badge/-bcrypt-CC3534?style=flat&logo=npm&logoColor=white) | **bcryptjs** | 2+ | Password Hashing (Project 04+) |
| ![nodemon](https://img.shields.io/badge/-nodemon-76D04B?style=flat&logo=nodemon&logoColor=white) | **nodemon** | 3+ | Hot reload for Express dev server |
| ![dotenv](https://img.shields.io/badge/-dotenv-ECD53F?style=flat&logo=dotenv&logoColor=black) | **dotenv** | 16+ | Environment variable management |

---

## 📁 Repository Structure

```
beginner-javascript-projects/
│
├── 📁 01-taskflow-todo-app/           # ⚡ Full CRUD Task Manager
│   ├── client/src/
│   │   ├── components/               #    TaskForm · TaskItem · TaskList
│   │   └── services/api.js           #    Reusable fetch client
│   └── server/
│       ├── controllers/taskController.js
│       ├── models/Task.js
│       ├── routes/taskRoutes.js
│       ├── .env.example
│       └── server.js
│
├── 📁 02-expense-tracker/             # 💰 Finance Dashboard + Aggregations
│   ├── client/src/components/        #    BalanceCard · TransactionForm · TransactionList
│   └── server/
│       ├── controllers/transactionController.js
│       ├── models/Transaction.js
│       └── server.js
│
├── 📁 03-dev-snippet-blog/            # 📝 Blog Platform — Search & Pagination
│   ├── client/src/
│   └── server/                       #    Regex search · .skip()/.limit() pagination
│
├── 📁 04-authvault-jwt-system/        # 🔐 JWT Auth — bcrypt + Protected Routes
│   ├── client/src/                   #    Auth Context · Protected Route component
│   └── server/
│       └── middleware/protect.js     #    JWT verification middleware
│
├── 📁 05-book-review-hub/             # 📚 Relational Data — Mongoose populate()
│   ├── client/src/
│   └── server/                       #    .populate() · $avg aggregation
│
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md                         # ← You are here
```

---

## 🧩 Key Concepts Covered

<details>
<summary><b>🟢 Beginner Concepts (Projects 01–02)</b></summary>
<br/>

| Concept | Description |
|:---|:---|
| REST API Design | HTTP verbs (GET/POST/PUT/DELETE), status codes (200/201/400/404/500), JSON response conventions |
| MVC Architecture | Separating `routes/`, `controllers/`, and `models/` for scalable, maintainable code |
| Mongoose Schema | `required`, `enum`, `trim`, `default`, `timestamps` for automatic `createdAt`/`updatedAt` |
| CORS Setup | Enabling safe cross-origin requests between React client and Express server |
| Environment Variables | Using `.env` and `dotenv` to keep secrets out of version control |
| React Controlled Forms | Binding form state to `useState` for clean validation and submission |
| useEffect Data Fetching | Loading data on mount and re-fetching when filters change |
| Optimistic UI Updates | Updating state immediately, reverting to server state if the API call fails |

</details>

<details>
<summary><b>🟡 Mid-Level Concepts (Projects 03–04)</b></summary>
<br/>

| Concept | Description |
|:---|:---|
| Regex Text Search | Case-insensitive MongoDB regex search across text fields |
| Query Params Parsing | Reading `req.query` to build dynamic Mongoose filter objects |
| Pagination | Combining `.skip(offset).limit(pageSize)` for page-based results |
| bcrypt Password Hashing | Hashing passwords with salt rounds on register — comparing on login |
| JWT Sign & Verify | Issuing a signed token on login, verifying it on every protected API call |
| Express Middleware | Writing `protect.js` to intercept requests and validate Bearer tokens |
| React Auth Context | Using `createContext` and `useContext` to share auth state app-wide |
| Client-Side Route Guards | `<PrivateRoute>` redirecting unauthenticated users away from protected pages |

</details>

<details>
<summary><b>🔴 Intermediate Concepts (Project 05)</b></summary>
<br/>

| Concept | Description |
|:---|:---|
| Mongoose Document References | Using `ref: 'User'` and `ObjectId` to link collections (like SQL foreign keys) |
| `.populate()` | Replacing `ObjectId` references with the actual linked document in a single query |
| MongoDB Aggregation Pipeline | Using `$group` and `$avg` to compute average star ratings across reviews |
| Auth-Gated Write Operations | Verifying JWT middleware before allowing create/update/delete operations |

</details>

---

## 🤝 Contributing

All contributions — new projects, improved docs, additional tests, or CSS — are welcome!

```bash
# 1. Fork and clone
git clone https://github.com/<your-username>/beginner-javascript-projects.git

# 2. Create a feature branch
git checkout -b feat/add-06-chat-app

# 3. Commit with a clear message
git commit -m "feat(06): add real-time chat app with Socket.io"

# 4. Push and open a Pull Request
git push origin feat/add-06-chat-app
```

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting.

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-dailydebugging/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-dailydebugging)

*Built with ❤️ for the developer community.*

⭐ **Star this repo if it helped you** — it helps the next developer find it.

</div>
