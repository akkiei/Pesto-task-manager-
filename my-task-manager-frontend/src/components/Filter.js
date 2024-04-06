// src/components/Filter.js
import React from "react";

function Filter({ setFilterValue }) {
  return (
    <select onChange={(e) => setFilterValue(e.target.value)}>
      <option value="">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
}

export default Filter;
