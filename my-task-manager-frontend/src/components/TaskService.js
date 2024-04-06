// src/api/TasksService.js
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/tasks"; // Adjust the port if your backend runs on a different one

export const fetchTasks = async (status = "") => {
  const response = await axios.get(`${BASE_URL}?status=${status}`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(BASE_URL, task);
  return response.data;
};

export const updateTask = async (id, updates) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
