// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { fetchTasks, updateTask, deleteTask } from "./TaskService";
import Task from "./Task";

function TaskList({ filter, reload }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const fetchedTasks = await fetchTasks(filter);
    setTasks(fetchedTasks);
  };

  const handleUpdateTask = async (id, updates) => {
    await updateTask(id, updates);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };
  useEffect(() => {
    loadTasks();
  }, [filter, reload]);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
