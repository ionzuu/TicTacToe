# ❌⭕ Tic-Tac-Toe — React 19 + TypeScript

A modular, responsive, and strictly typed Tic-Tac-Toe game built with **React 19**, **TypeScript**, and **CSS3**.

This project was built with a strong focus on frontend architecture best practices, separation of concerns, derived state, and custom hooks.

---

## 🚀 Key Features

* **React 19 & Functional Components:** Modern React patterns for optimal performance without unnecessary re-renders.
* **Strict TypeScript:** Full typing for components, props, events, and domain logic (`SquareValue = 'X' | 'O' | null`).
* **Optimized Derived State:** Instant winner and draw calculation performed directly during render cycles (avoiding `useEffect` overhead or redundant state).

---

## 🛠️ Tech Stack

* **Frontend:** React 19, TypeScript
* **Styling:** CSS3
* **Build Tool:** Vite
* **Version Control:** Git & GitHub

---

## 📁 Project Structure

```text
src/
├── functions/       # UI Components (Square, Board, Status, etc.)
├── hooks/            # Custom Hooks (calculateWinnerm useSquareClicks)
├── types/            # TypeScript definitions & interfaces
├── App.tsx           # Main application entry component
└── main.tsx          # Application bootstrap
