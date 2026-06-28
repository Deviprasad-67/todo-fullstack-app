📝 Full Stack Todo Application

A modern Full Stack Todo Application built using **Next.js**, **FastAPI**, **MySQL**, **SQLAlchemy**, and **Alembic**. The application provides complete CRUD functionality with a clean, responsive user interface and supports dark/light mode.

---

🚀Features

- ✅ Create new todos
- ✅ View all todos
- ✅ Update existing todos
- ✅ Delete todos
- ✅ Mark todos as Completed or Pending
- ✅ Dark Mode / Light Mode
- ✅ Responsive UI
- ✅ RESTful API using FastAPI
- ✅ MySQL database integration

---

🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- FastAPI
- Python
- SQLAlchemy
- Alembic

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code

---

 Project Structure

```
todo-fullstack-app/
│
├── backend/
│   ├── app/
│   ├── alembic/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── package.json
│
├── screenshots/
│
└── README.md
```

---


---

⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Deviprasad-67/todo-fullstack-app.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs on:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/todos` | Get all todos |
| GET | `/todos/{id}` | Get todo by ID |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/{id}` | Update a todo |
| PATCH | `/todos/{id}` | Update todo status |
| DELETE | `/todos/{id}` | Delete a todo |

---

🔮 Future Enhancements

- User Authentication (JWT)
- Search Todos
- Filter by Status
- Due Dates
- Categories
- Priority Levels
- Email Notifications
- Docker Support
- Deployment on Vercel & Render

---

👨‍💻 Author

Deviprasad Nayak


