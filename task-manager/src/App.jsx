import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContex';

const App = () => {
  return (
    <TaskProvider>
      <div className="container">
        <header>
          <h1>Task Manager</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new">New Task</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </TaskProvider>
  );
};

export default App;
