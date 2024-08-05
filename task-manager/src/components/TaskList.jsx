import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContex';

const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <Link to={`/edit/${task.id}`}>{task.title}</Link>
              <p>{task.description}</p>
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
