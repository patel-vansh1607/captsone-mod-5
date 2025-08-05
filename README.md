## Features In Depth 🧠

### 1. User Authentication
- Secure login and registration with email and password.
- All users are given a JSON Web Token (JWT) for a very secure session.
- Use of Hashed passwords applied.

### 2. Real-Time Notifications
- Get notified instantly about important events and updates.

### 3. Dynamic Content Management
- All users get the main panel for managing content dynamically.
- Ability to create, update, and delete posts.
- Ability to use Gemini AI which is intergrated into the task management app.

### 4. Customizable Themes
- Choose from dark mode or light mode

### 5. Analytics Dashboard
- Real-time statistics and metrics for user activity.
- Visual graphs and charts for easy data interpretation.

## Tech Available in Taskee
This website has may tech available, which include


| **Tech**          | **Used on which Page**                    |
|-------------------|---------------------------------|
| Stats with Chart     | [stats.com](https://apptaskee.vercel.app/stats)  |
| Stats AI Helper| [ai.com](https://apptaskee.vercel.app/tasksAI) |
| Pomodro     | [pomodro.com](https://apptaskee.vercel.app/pomodro) |


# 🌱 ProductiveLife – Your All-in-One Productivity Dashboard

> 🚀 Simplified tools for productive living. Manage tasks, boost focus, and plant trees while listening to lofi beats.

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React JS** – Component-based UI
- **React Router DOM** – Page navigation
- **Redux Toolkit** – Global state management
- **Framer Motion** – Smooth animations
- **Recharts** – Dynamic data visualization
- **React-Toastify** – User notifications
- **React-DatePicker** – Smart date input
- **CSS3** (External stylesheet) – Custom designs
- **Poppins Font** – Clean, modern typography
- **Font Awesome** – Icon library

### 🌐 Backend
- **Node.js & Express** – Server-side logic & REST APIs
- **MongoDB + Mongoose** – Database for users, tasks, and trees
- **Flask + Flask-Mail** (Integrated separately) – Email notifications
- **JWT Auth** – Secure login/signup
- **Multer** – Profile photo uploads

### 📦 Dev Tools & Config
- **Prettier** – Code formatter
- **ESLint** – Code linter
- **Webpack** – Module bundler
- **GitHub** – Version control
- **Visual Studio Code** – Development environment

---

## ✨ Features

### ✅ Task Management
- Add, update, complete, and delete tasks
- Assign priority, due date, and assignee
- Responsive card layout for easy task visualization

### 🍅 Fullscreen Pomodoro Timer
- Customizable session and break durations
- Lofi music player (with mute/unmute toggle)
- Tree planting animation: 🌱 `1 min = 1 tree`
- Timer persists with `localStorage`

### 📈 Charts & Analytics
- Bar & pie charts to visualize task completion
- Recharts integration with Redux state

### 📸 Profile System
- Upload and display profile pictures (stored via `FormData`)
- Username display and logout button

### 🔒 Auth System
- User registration with secure password storage
- Login with persistent authentication using JWT

### 📬 Newsletter
- Email signup form connected to Flask-Mail API
- Instant confirmation via toast

### 💡 Smart UI/UX
- Framer Motion animations on page transitions
- Sidebar layout with full responsiveness
- Hero sections, mockup display, and mobile responsiveness
- Switch-based pricing toggle (Monthly ↔ Yearly)

### 🌍 Offline Support (Optional)
- Tasks and tree progress stored in `localStorage`
- Pomodoro/music/player all work offline

---

## 🚀 Getting Started

### 📁 Clone the repo
```bash
git clone https://github.com/your-username/productive-dashboard.git
cd productive-dashboard
