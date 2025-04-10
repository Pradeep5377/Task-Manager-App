const Task = require("../models/taskModel");

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create new task
exports.createTask = async (req, res) => {
  const task = new Task({ title: req.body.title });
  const savedTask = await task.save();
  res.status(201).json(savedTask);
};

// Update task
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

// Delete task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
