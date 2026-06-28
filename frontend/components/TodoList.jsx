"use client";

import { useEffect, useState } from "react";
import {
  getTodos,
  deleteTodo,
  patchTodo,
} from "../services/api";

export default function TodoList({
  refresh,
  onEdit,
}) {
  const [todos, setTodos] = useState([]);

  // Load Todos
  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Failed to load todos:", error);
      setTodos([]);
    }
  };

  useEffect(() => {
    loadTodos();
  }, [refresh]);

  // Delete Todo
  const handleDelete = async (id) => {
    if (!confirm("Delete this Todo?")) return;

    try {
      await deleteTodo(id);
      await loadTodos();
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle Complete / Pending
  const handleComplete = async (todo) => {
    try {
      await patchTodo(todo.id, !todo.completed);
      await loadTodos();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update todo.");
    }
  };

  return (
    <div className="todo-list">
      <h2>📋 Todo List</h2>

      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            <h3>{todo.title}</h3>

            <p>{todo.description}</p>

            <p>
              Status :
              <strong
                style={{
                  color: todo.completed ? "#28a745" : "#f39c12",
                  marginLeft: "8px",
                }}
              >
                {todo.completed
                  ? "✅ Completed"
                  : "⏳ Pending"}
              </strong>
            </p>

            <div className="button-group">
              <button
                className="edit-btn"
                onClick={() => onEdit(todo)}
              >
                ✏ Edit
              </button>

              <button
                className="complete-btn"
                style={{
                  background: todo.completed
                    ? "#f39c12"
                    : "#27ae60",
                }}
                onClick={() => handleComplete(todo)}
              >
                {todo.completed
                  ? "↩ Mark Pending"
                  : "✔ Mark Completed"}
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}