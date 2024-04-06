import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const [reload, setReload] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {}, [reload]);
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm setReload={setReload} />
      <Filter setFilterValue={setFilterValue} />
      <TaskList reload={reload} filter={filterValue} />
    </div>
  );
}

export default App;
