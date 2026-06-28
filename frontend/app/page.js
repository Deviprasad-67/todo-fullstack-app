"use client";

import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  const [refresh, setRefresh] = useState(0);
  const [editingTodo, setEditingTodo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleTodoAdded = () => {
    setRefresh((prev) => prev + 1);
    setEditingTodo(null);
  };

  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="header">
        <h1>📝 Todo Manager</h1>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <TodoForm
        onTodoAdded={handleTodoAdded}
        editingTodo={editingTodo}
      />

      <hr />

      <TodoList
        refresh={refresh}
        onEdit={setEditingTodo}
      />
    </main>
  );
}