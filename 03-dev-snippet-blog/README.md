# 03 • DevSnap Blog: Developer Blog & Code Snippet Platform

A full-stack blog platform for developers to publish and discover tagged code snippets and technical posts.

<div align="center">

[![Difficulty](https://img.shields.io/badge/Difficulty-Easy%20to%20Mid-yellow.svg?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-MERN-blue.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

</div>

---

## 🎯 What You Will Build
- **Rich Post Feed:** Paginated grid of blog posts with code snippet previews.
- **Full-Text Search:** Live server-side MongoDB regex search across titles and body text.
- **Tag Filtering:** Filter posts by technology tags (react, nodejs, mongodb, javascript).
- **Post Detail Page:** Full post view with syntax-highlighted code blocks.
- **Create / Delete Posts:** Authenticated post authoring (connected to Project 04's AuthVault).

---

## 🧠 New Concepts Introduced in This Project

| Concept | Implementation |
|:---|:---|
| **MongoDB Text Search** | `{ title: { $regex: query, $options: 'i' } }` case-insensitive search |
| **Pagination** | `Model.find().skip((page-1)*limit).limit(limit)` |
| **Multi-Filter with `$in`** | `{ tags: { $in: ['react', 'nodejs'] } }` for tag arrays |
| **Query Param Parsing** | `const { q, page, limit, tag } = req.query` |

---

## ⚡ Quick Start

```bash
# Backend
cd server && npm install && cp .env.example .env && npm run dev

# Frontend (new terminal)
cd client && npm install && npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| `GET` | `/api/posts?q=hooks&tag=react&page=1&limit=10` | Search & paginate posts |
| `GET` | `/api/posts/:id` | Get single post |
| `POST` | `/api/posts` | Create a new post |
| `DELETE` | `/api/posts/:id` | Delete a post |

---

## 🚀 Extension Challenges
- [ ] Add a Markdown editor (e.g. `react-markdown` + `@uiw/react-md-editor`) for rich post authoring.
- [ ] Add a "Related Posts" section based on shared tags.
- [ ] Add `views` counter that increments on each post detail page visit.

---

[⬅ Back to Main Catalog](../README.md)

