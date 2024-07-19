import React, { useState } from "react";
import "./styles/App.css";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoMain from "./components/TodoMain/TodoMain";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Completed Task", completed: false },
    { id: 2, description: "Editing task", completed: false },
    { id: 3, description: "Active task", completed: false },
  ]);

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
    console.log(tasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todoapp">
      <TodoHeader />
      <TodoMain tasks={tasks} onClick={completeTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
