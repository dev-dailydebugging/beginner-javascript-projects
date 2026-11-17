# 02 • ExpensePulse: MERN Personal Finance & Budget Tracker

A full-stack financial dashboard designed to teach data calculation, numerical validation, category grouping, and MERN CRUD operations.

<div align="center">

[![Difficulty](https://img.shields.io/badge/Difficulty-Beginner%20Friendly-brightgreen.svg?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-MERN-blue.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

</div>

---

## 🎯 What You Will Build
- **Real-Time Net Balance:** Automatic calculation of net worth = total income - total expenses.
- **Categorized Inflow/Outflow:** Track food, rent, salary, freelance gigs, and utilities.
- **Dynamic Color Indicators:** Positive green borders for income and red indicators for expenses.
- **MongoDB Persistence:** Never lose financial history on page reload.

---

## ⚡ Quick Start

### 1. Start Server
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 2. Start Client
```bash
cd client
npm install
npm run dev
```

---

## 📡 API Endpoints
- `GET /api/transactions`: Returns all items plus calculated `{ totalIncome, totalExpense, balance }`.
- `POST /api/transactions`: Creates a transaction `{ title, amount, type, category }`.
- `DELETE /api/transactions/:id`: Removes a transaction.

---

## 🚀 Challenges to Level Up
- [ ] Add Chart.js or Recharts to visualize spending distribution across categories.
- [ ] Add a date picker allowing entries to be logged for past dates.
- [ ] Add monthly filtering (e.g. "October 2026", "November 2026").

---

[⬅ Back to Main Repository Catalog](../README.md)

