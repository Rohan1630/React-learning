import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TaskContex';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (id) {
      const existingTask = tasks.find((t) => t.id === id);
      if (existingTask) {
        setTask(existingTask);
      }
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Task' : 'New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={task.description} onChange={handleChange} required />
        </div>
        <button type="submit">{id ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
