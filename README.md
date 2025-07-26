# 🤖 Resolvr-AI Full Stack AI Agent Application

> A **production-ready AI agent platform** built with React, Express, MongoDB, and the **Inngest** framework — seamlessly integrating AI with real-world backend workflows and role-based access control.

---

## 🚀 Project Highlights

- 🤖 Built a **full stack AI agent application** capable of real-time ticket triaging and asynchronous processing.
- 🧠 Powered by **Google Gemini LLM** for analyzing and extracting structured data (priority, notes, skills) from support tickets.
- 🛠️ Utilized **ExpressJS, MongoDB, JWT**, and the **Inngest framework** to orchestrate agent tasks and background jobs.
- 🔄 Background workers handle **asynchronous email notifications**, improving UI responsiveness and scalability.
- 🔐 Integrated **role-based access control** with three levels: admin, moderator, and user.
- ⚛️ Frontend built using **React**, **React Router**, **TailwindCSS**, and **DaisyUI** with protected routes and API connections.
- 🎯 Emphasis on **structured prompt engineering** and **reliable AI response parsing** using JSON schemas and regex.

---

## 💡 Key Insights

### 🤖 AI Agents Need Full Stack Support

> AI agents can’t function reliably in isolation — they must integrate with databases, background jobs, and event-driven systems to achieve real-world utility and stability.

### 🛠️ Inngest Framework for Orchestration

> The **Inngest framework** enables:
- Event-driven function triggers
- Retry and scheduling support
- Background processing (e.g., email dispatch)
- Seamless integration with LLMs

This architecture enables agent workflows to run **non-blocking** and **scalable**.

### 🧠 Structured Prompt Engineering

> To ensure consistent output from LLMs, prompts are crafted to demand **strict JSON responses** with fields like:

```json
{
  "priority": "high",
  "notes": "This is a critical issue affecting checkout.",
  "skills": ["frontend", "payments"]
}
```
### 🔐 Role-Based Access Control (RBAC)

The application supports multiple user roles:

- **Admin** – Full access and user management  
- **Moderator** – Assigned tickets via AI skill matching  
- **User** – Can submit support tickets  

RBAC is enforced across **frontend routes** and **backend APIs** for secure access control and permissions management.

---

### 📧 Asynchronous Background Workers

Email confirmations and ticket assignment messages are **processed by background workers** using **Inngest**, ensuring:

- Fast and responsive user interactions  
- Background tasks (like emails) do not block the UI  
- Scalability as tasks are offloaded from the main request cycle

---

### 🗄️ Express + MongoDB Backend

The backend is built with a familiar and flexible stack using **Express.js** and **MongoDB**, making it easy to:

- ✅ Extend or modify Mongoose models  
- 🔄 Swap databases if needed  
- 🔐 Customize authentication and session logic  
- 🌐 Integrate external APIs and services  

> Well-structured for both beginners and experienced developers.

---

### ⚛️ React Frontend with Guarded Routes

The frontend is built using **React** with the following key features:

- 🔒 **Route protection** using a custom `CheckAuth` wrapper component  
- 🧠 **Local form state** + fetch API integration for clean data flow  
- 🧼 **Separation of concerns** between UI logic and backend logic  
- 🎨 UI styled using **TailwindCSS** and **DaisyUI** for modern design and fast iteration

---

### 📂 Tech Stack

| Layer        | Tech Used                                   |
|--------------|----------------------------------------------|
| **Frontend** | React, React Router, TailwindCSS, DaisyUI    |
| **Backend**  | Express.js, MongoDB, JWT, Inngest            |
| **AI Layer** | Google Gemini LLM                            |
| **Other**    | Regex Parsing, Protected Routing, RBAC       |



## ⚙️ Getting Started (Setup Instructions)

Follow these steps to run **Resolvr-AI** locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/pnk-ltoc-892/Resolvr-AI.git
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
## 🤝 Contributing

We welcome contributions from developers of all skill levels!

Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting a pull request.
