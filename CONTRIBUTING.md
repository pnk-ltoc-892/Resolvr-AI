# 🤝 Contributing to Resolvr-AI

Thanks for your interest in contributing to **Unsocially** — a full-stack modern social media platform built with the MERN stack!  
We’re excited to have you here 💙 Whether it’s a bug, a feature, or a fix — your help improves the project for everyone.

---

## 📦 Project Setup Instructions
Follow these steps to run **Unsocially** locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Resolvr-AI.git
cd Resolvr-AI
```

### 2. Backend Setup (/backend)
```bash
cd backend
cp .env.sample .env
npm install
npm run dev
```

### 2. Frontend Setup (/frontend)
```bash
cd ../frontend
cp .env.sample .env
npm install
npm run dev
```


### 🧭 How to Contribute

1. **Create your feature branch:**

    ```bash
    git checkout dev
    git pull origin dev
    git checkout -b feature/your-feature
    ```

2. **Make your changes**  
   Follow our [Code Style Guide](#-code-style-guide) to maintain consistency.

3. **Test thoroughly** before pushing.

4. **Commit your changes with a clear message:**

    ```bash
    git commit -m "Add: user authentication with JWT"
    ```

5. **Push to your fork:**

    ```bash
    git push origin feature/your-feature
    ```

6. **Open a Pull Request**  
   Go to GitHub and open a PR targeting the `dev` branch.

### 🧪 Testing Guidelines

Please test locally before submitting a pull request:

- ✅ Register/login flows
- ✅ Creating, And Viewing Tickets
- ✅ AI Agent Updation of tickets & confirmation mails
- ✅ Responsiveness on mobile, tablet, and desktop
- ✅ API calls (via Postman or frontend UI)

---

### 🎯 Code Style Guide

To keep the codebase clean and consistent:

- Use `camelCase` for variables and functions
- Use `PascalCase` for React components
- Avoid unnecessary files, unused code, or comments
- Use `.env` files for all secrets/config (never hardcode!)
- Remove unused imports, variables, and console logs
- Ensure consistent spacing and indentation
- Use **ESLint** or **Prettier** if configured

---

### 🐞 Reporting Issues

If you encounter a bug or want to request a feature, please open an issue with:

- A **clear title** (e.g. `Login: JWT token not returned`)
- A helpful description including:
  - Steps to reproduce
  - Expected vs. actual behavior
  - Screenshots, logs, or relevant output (if applicable)

Use appropriate GitHub **labels** like:
- `bug`
- `feature`
- `help wanted`

---

### 📣 Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code compiles without errors
- [ ] UI changes are responsive and accessible
- [ ] No console warnings or runtime errors
- [ ] All secrets/configs are handled via `.env`
- [ ] PR description clearly explains **what** and **why** you changed
