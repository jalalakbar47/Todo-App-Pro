# Todo App Pro 🚀

**Todo App Pro** is a premium, SaaS-grade productivity dashboard built with React 19 and Vite. Designed for efficiency and elegance, it offers a high-end user experience with glassmorphism aesthetics, real-time analytics, and advanced task management.

![Project Banner](./screenshots/banner.webp)

## ✨ Features

- **💎 Premium SaaS UI**: Modern glassmorphism design with smooth gradients and "Outfit" typography.
- **🌓 Adaptive Theming**: Seamless Light and Dark mode transition with persistence.
- **📊 Productivity Dashboard**: 
  - **Progress Ring & Bar**: Real-time visualization of task completion.
  - **Animated Counters**: Stats that count up dynamically.
  - **Motivation Engine**: Smart greeting and motivational messaged based on progress.
- **📝 Advanced Task Management**:
  - **Descriptions**: Support for multiline task details (200-char limit).
  - **Categorization**: Color-coded badges (Work, Personal, Study, etc.).
  - **Relative Timestamps**: Smart labels like "Created Today • 2:45 PM".
- **🔍 Intelligent Search**: Instant search through both titles and descriptions.
- **⚡ Batch Actions**: Mark all as completed or clear your dashboard in one click.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **💾 Persistent Storage**: All data and preferences saved to LocalStorage.

## 📸 Screenshots

### 🌙 Dark Mode Dashboard
![Dark Mode](./screenshots/dark_mode.webp)

### 📝 Task Management
![Task Management](./screenshots/task_management.webp)

### 📈 Progress Tracking
![Progress Tracking](./screenshots/progress_tracking.webp)

### 📱 Responsive Design
![Responsive Design](./screenshots/responsive.webp)

## 🚀 Installation & Usage

### 🛠️ Build from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/jalalakbar47/todo-app-pro.git
   ```
2. Navigate to project folder:
   ```bash
   cd todo-app-pro
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## 📂 Folder Structure

```text
src/
  components/
    Header.jsx      - Saas-style header with navigation
    TodoForm.jsx    - Professional task entry with validation
    TodoList.jsx    - Optimized task container
    TodoItem.jsx    - High-fidelity task card
    TodoStats.jsx   - Dashboard with animated metrics
    ProgressRing.jsx - Custom SVG progress visualization
    SearchBox.jsx   - Instant search implementation
    ThemeToggle.jsx - Glassmorphism theme switcher
  utils/
    localStorage.js - Persistence layer
    dateUtils.js    - Relative time & greeting logic
  App.jsx           - Main logic & Layout orchestration
  index.css         - Design system & CSS tokens
```

## 🛠️ Technologies Used

- **React 19**: Fiber-fast UI library.
- **Vite 6**: Next-generation frontend tooling.
- **Lucide React**: Clean, tree-shakable icons.
- **CSS3**: Advanced Vanilla CSS (Variables, Glassmorphism, Transitions).

## 🔮 Future Roadmap

- [ ] Firebase Cloud Sync & Real-time Collab.
- [ ] Drag-and-Drop Task Reordering.
- [ ] Weekly/Monthly Analytics Reports.
- [ ] Browser Push Notifications.

## 👨‍💻 Author & Dedication

Created with ❤️ by **Jalal Akbar**

> Dedicated To My ❤️ J/S — My Inspiration.

[GitHub Profile](https://github.com/JalalAkbar47)

---
Built with ❤️ for a professional portfolio.
