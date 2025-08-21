<img width="1360" height="627" alt="blog 2" src="https://github.com/user-attachments/assets/e4ab5ce7-a33f-4e81-8d61-422a697a1876" /># 📰 Task 4 — Personal Blog Homepage (React)

A clean, responsive **Personal Blog Homepage** built in **React** with a **card grid**, **category filter**, **search**, and **pagination** — matching the black & soft-yellow Elevvo theme and footer credit.

---

## ✨ Features
- 🧭 **Header** with blog title & nav
- 🗂️ **Category Filter** (e.g., Tech, Travel, Food)
- 🔎 **Search by Title** (instant filtering)
- 🧩 **Card Grid** (image, title, excerpt, date)
- 📄 **Pagination** (limit posts per page)
- 📱 **Responsive Layout** (mobile → desktop)
- 🦶 **Footer** with credit: `© 2025 Elevvo — Built by sohaibranjha`

---

## 🛠 Tech Stack
- **React** (Vite or CRA)
- **CSS** (custom, responsive)
- **JavaScript (ES6+)**

---

## 📂 Project Structure
personal-blog/
├── src/
│ ├── App.js
│ ├── data/posts.js # sample posts (title, category, date, image, excerpt)
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── BlogCard.jsx
│ │ ├── CategoryFilter.jsx
│ │ └── Pagination.jsx
│ ├── styles/
│ │ └── blog.css # black & yellow theme
│ └── assets/
│ ├── logo.png
│ ├── tech1.jpg
│ ├── travel1.jpg
│ ├── food1.jpg
│ └── ... (add more)
├── index.html
├── package.json
└── README.md


> ℹ️ **Case-sensitive assets:** If your imports say `logo.png`, make sure the file name is exactly `logo.png` (not `logo.PNG`).

---

## 🚀 Getting Started

### Option A — Vite (recommended)
```bash
npm create vite@latest personal-blog -- --template react
cd personal-blog
npm install

🧩 **How It Works**  

**Filtering:** Category buttons update local state → filter the posts list.

**Search:** Text input filters posts by title (case-insensitive).

**Pagination:** After filtering, posts are sliced by POSTS_PER_PAGE.

**Cards:** Each card shows image, title, excerpt, and date.

**© 2025 Elevvo — Built by sohaibranjha.**
