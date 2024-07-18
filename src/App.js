import React, { useState } from "react";
import "./styles/App.css";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoMain from "./components/TodoMain/TodoMain";
function App() {
  return (
    <div className="todoapp">
      <TodoHeader />
      <TodoMain />
    </div>
  );
}

export default App;
