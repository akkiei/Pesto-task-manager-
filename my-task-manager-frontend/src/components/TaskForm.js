// src/components/TaskForm.js
import React, { useState } from "react";
import { createTask } from "./TaskService";

function TaskForm({ setReload }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setError("");
    await createTask({ title, description, status });
    // onTaskCreated();
    setTitle("");
    setDescription("");
    setStatus("To Do");
    setReload((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
