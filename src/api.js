const API_URL = "https://your-backend-url.onrender.com/tasks"; // Update this with your Render backend URL

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTask = async (title) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return response.json();
};

export const updateTask = async (id, completed) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
