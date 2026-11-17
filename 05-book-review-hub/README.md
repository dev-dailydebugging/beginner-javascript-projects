# 05 • BookNook: Book Review Hub with Relational Data

A full-stack book review platform where authenticated users can discover books, write star-rated reviews, and see per-book average ratings — all powered by Mongoose document references and `.populate()`.

<div align="center">

[![Difficulty](https://img.shields.io/badge/Difficulty-Intermediate-red.svg?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20JWT%20%2B%20Mongoose%20Refs-blue.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

</div>

---

## 🎯 What You Will Build
- **Book Catalog:** Paginated grid of books with cover, author, genre, and average star rating.
- **Book Detail Page:** Full book info + all user reviews with reviewer name & date.
- **Submit Review:** Authenticated users (JWT from Project 04) can submit a 1–5 star review with a comment.
- **Dynamic Average Rating:** Every time a review is added, the book's `averageRating` is recomputed and saved.
- **User Profiles:** Each review shows the reviewer's name via `populate('userId', 'name')`.

---

## 🧠 New Concepts Introduced in This Project

| Concept | Implementation |
|:---|:---|
| **Mongoose Refs** | `userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }` |
| **`.populate()`** | `Review.find().populate('userId', 'name email')` replaces ObjectId with user document |
| **Aggregation Pipeline** | `Book.aggregate([{ $match }, { $lookup }, { $group: { avgRating: { $avg: '$rating' } } }])` |
| **Post-Save Hooks** | Mongoose `reviewSchema.post('save', ...)` recalculates book average on every new review |

---

## 📊 Database Schema (Relationship Diagram)

```
Users ──────────────── Reviews ──────────── Books
  │                       │                   │
  │_id (ObjectId)         │userId → Users._id │_id (ObjectId)
  │name                   │bookId → Books._id  │title
  │email                  │rating (1-5)        │author
  │password (hashed)      │comment             │genre
                          │createdAt           │averageRating (computed)
```

---

## ⚡ Quick Start

```bash
# Backend (PORT 5003 — requires MongoDB + JWT secret from Project 04)
cd server && npm install && cp .env.example .env && npm run dev

# Frontend (new terminal)
cd client && npm install && npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|:---|:---|:---:|:---|
| `GET` | `/api/books` | ❌ | Get all books with average ratings |
| `GET` | `/api/books/:id` | ❌ | Get book + all populated reviews |
| `POST` | `/api/books` | ✅ | Add a new book |
| `POST` | `/api/reviews` | ✅ | Submit a review for a book |
| `DELETE` | `/api/reviews/:id` | ✅ | Delete your own review |

---

## 🚀 Extension Challenges
- [ ] Add a "My Reviews" page showing all reviews the logged-in user has submitted.
- [ ] Prevent users from submitting more than one review per book (unique compound index).
- [ ] Add genre-based filtering and a sort-by-rating feature.

---

[⬅ Back to Main Catalog](../README.md)
