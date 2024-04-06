// src/components/Task.js
import React, { useState } from "react";

function Task({ task, onUpdateTask, onDeleteTask, onAddTask }) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    onUpdateTask(task._id, { status });
    setEditMode(false);
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {editMode ? (
        <>
          <select value={status} onChange={handleStatusChange}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Status: {task.status}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteTask(task._id)}>Delete</button>
    </div>
  );
}

export default Task;
