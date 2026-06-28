const BASE_URL = "http://127.0.0.1:8000";

// Get All Todos
export async function getTodos() {
  const response = await fetch(`${BASE_URL}/todos`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return await response.json();
}

// Get Todo By ID
export async function getTodo(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`);

  if (!response.ok) {
    throw new Error("Todo not found");
  }

  return await response.json();
}

// Create Todo
export async function createTodo(todo) {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return await response.json();
}

// Update Todo
export async function updateTodo(id, todo) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return await response.json();
}

// Patch Todo
export async function patchTodo(id, completed) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return await response.json();
}

// Delete Todo
export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  return await response.json();
}