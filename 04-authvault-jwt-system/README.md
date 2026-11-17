# 04 • AuthVault: Full JWT Authentication System

A complete user authentication system with registration, login, bcrypt password hashing, JWT token issuance, Express middleware protection, and React-side auth context with protected routing.

<div align="center">

[![Difficulty](https://img.shields.io/badge/Difficulty-Easy%20to%20Mid-yellow.svg?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20JWT%20%2B%20bcrypt-blue.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

</div>

---

## 🎯 What You Will Build
- **Register:** Create account with email, password (hashed with bcrypt, never stored plain text).
- **Login:** Verify credentials → issue a signed JWT → store in `localStorage`.
- **Protected Backend Routes:** An Express `protect` middleware that verifies JWT before every sensitive API call.
- **Protected Frontend Routes:** A React `<PrivateRoute>` component that redirects unauthenticated users to `/login`.
- **Auth Context:** Global auth state shared across all components via React Context API.

---

## 🧠 New Concepts Introduced in This Project

| Concept | Implementation |
|:---|:---|
| **bcrypt Hashing** | `bcrypt.hash(password, 12)` on register · `bcrypt.compare()` on login |
| **JWT Sign** | `jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })` |
| **JWT Verify Middleware** | `protect.js` reads `Authorization: Bearer <token>` header, calls `jwt.verify()` |
| **Auth Context** | `createContext()` → `AuthProvider` wraps app → `useAuth()` custom hook |
| **Private Route** | `const { user } = useAuth(); if (!user) return <Navigate to="/login" />;` |

---

## ⚡ Quick Start

```bash
# Backend (PORT 5002)
cd server && npm install && cp .env.example .env && npm run dev

# Frontend (new terminal)
cd client && npm install && npm run dev
```

> ⚠️ Add `JWT_SECRET=your_super_secret_key_here` to your `.env` file — keep it long, random, and private.

---

## 📡 API Endpoints

| Method | Endpoint | Auth Required | Description |
|:---|:---|:---:|:---|
| `POST` | `/api/auth/register` | ❌ | Create new account |
| `POST` | `/api/auth/login` | ❌ | Login and receive JWT |
| `GET` | `/api/auth/me` | ✅ | Get current logged-in user profile |

---

## 🚀 Extension Challenges
- [ ] Add token refresh logic using a `refreshToken` stored in an `httpOnly` cookie.
- [ ] Add Google OAuth login using `passport.js`.
- [ ] Add "Forgot Password" email flow using Nodemailer + reset tokens.

---

[⬅ Back to Main Catalog](../README.md)

