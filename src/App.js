import React, { useEffect, useState } from 'react';

import './styles/App.css';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoMain from './components/TodoMain/TodoMain';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed Task',
      completed: false,
      count: 1,
      createTime: new Date(),
    },
    {
      id: 2,
      description: 'Editing task',
      completed: false,
      count: 1,
      createTime: new Date(),
    },
    {
      id: 3,
      description: 'Active task',
      completed: false,
      count: 1,
      createTime: new Date(),
    },
  ]);

  const [copyTask, setCopyTask] = useState(tasks);

  const [categoryTab] = useState([
    {
      id: 1,
      name: 'All',
      category: 'all',
      className: '',
    },
    {
      id: 2,
      name: 'Active',
      category: false,
      className: '' ,
    },
    {
      id: 3,
      name: 'Completed',
      category: true,
      className: '',
    },
  ]);

  const selectCategory = (category) => {
    if (category   === 'all') {
      setCopyTask(tasks);
    } else {
      setCopyTask([...tasks].filter((task) => task.completed === category));
    }
  };

  useEffect(() => {
    setCopyTask(tasks);
  }, [tasks]);

  const addTodo = (text) => {
    const newTask = {
      id: tasks.map((task) => task.id),
      description: text,
      completed: false,
      count: 1,
      createTime: new Date(),
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAllCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="todoapp">
      <TodoHeader addTodo={addTodo} tasks={tasks} />
      <TodoMain
        selectCategory={selectCategory}
        category={categoryTab}
        tasks={copyTask}
        onClick={completeTask}
        onDelete={deleteTask}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
}

export default App;
