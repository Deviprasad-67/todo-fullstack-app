"use client";

import { useState, useEffect } from "react";
import { createTodo, updateTodo } from "../services/api";

export default function TodoForm({
  onTodoAdded,
  editingTodo,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  // Fill form when editing a todo
  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
      setCompleted(editingTodo.completed);
    } else {
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  }, [editingTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      title,
      description,
      completed,
    };

    try {
      if (editingTodo) {
        // Update existing todo
        await updateTodo(editingTodo.id, todo);
      } else {
        // Create new todo
        await createTodo(todo);
      }

      // Clear form
      setTitle("");
      setDescription("");
      setCompleted(false);

      // Refresh todo list
      if (onTodoAdded) {
        onTodoAdded();
      }

    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={handleSubmit}>

        <h2>
          {editingTodo ? "✏️ Edit Todo" : "➕ Add New Todo"}
        </h2>

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completed
        </label>

        <button type="submit">
          {editingTodo ? "Update Todo" : "Add Todo"}
        </button>

      </form>
    </div>
  );
}