import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await createTask(newTask);
    setNewTask("");
    loadTasks();
  };

  const handleToggleTask = async (id, completed) => {
    await updateTask(id, !completed);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add task..." />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }} onClick={() => handleToggleTask(task._id, task.completed)}>
              {task.title}
            </span>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
