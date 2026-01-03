👉 You can replace your README with this as-is.

# 🛒 Product Dashboard – Frontend Assignment

A modern product dashboard built with **React**, **Redux Toolkit**, and **Vite**.
This project demonstrates practical frontend skills such as state management, asynchronous data fetching, debounced search, and responsive UI design.

🔗 **Live Demo:**
https://product-dashboard-beta-dusky.vercel.app/

---
## 🎯 Objective

The goal of this assignment was to build a complete product dashboard while focusing on:

- Efficient and predictable state management using Redux Toolkit
- Optimized UI performance with debounced search and memoized filtering
- Writing meaningful unit tests for reducers and key components

---

## 🚀 Features

- **Responsive Product Grid** – Works well across mobile, tablet, and desktop screens
- **Debounced Search** – Search products by title without unnecessary re-renders
- **Filtering & Sorting** – Filter by category and sort by price (Low → High / High → Low)
- **Favorites System** – Add and remove products from favorites with a dedicated page
- **Product Details Page** – View complete product information using dynamic routing
- **Loading & Empty States** – Smooth UX with loaders and fallback UI

---

## 🛠 Tech Stack

- **Frontend:** React (Functional Components & Hooks)
- **State Management:** Redux Toolkit (Slices & Async Thunks)
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Testing:** Vitest & React Testing Library
- **API:** Fake Store API

---

## 📦 Project Setup

### 1️⃣ Clone the repository

```bash
git clone <your-github-repo-url>
cd product-dashboard
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Run the development server
```bash
npm run dev
```

The application will be available at:

http://localhost:5173

🧪 Running Tests

Unit tests are written using Vitest and React Testing Library.

To run all tests:
```bash
npm run test
```


All test cases should pass successfully.

🧠 Notes & Decisions

Redux Toolkit was used to keep state predictable and easy to manage.

Debounced search is implemented using a custom hook to avoid unnecessary re-renders.

Filtering and sorting logic is handled in the component layer for clarity.

Components are kept small and reusable where possible.

Testing focuses on reducers and important UI behavior without over-testing.

🌐 API Reference:

This project uses the following endpoints from Fake Store API:

Products: https://fakestoreapi.com/products

Categories: https://fakestoreapi.com/products/categories

🚀 Deployment

The application is deployed using Vercel.

🔗 Live URL:
https://product-dashboard-beta-dusky.vercel.app/

👤 Author

Rajat Goyal

Frontend Developer (React / React Native)
