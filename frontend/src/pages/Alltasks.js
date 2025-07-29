// In AllTasks.jsx
import React from 'react';
import { useTasks } from '../context/TaskContent';

function AllTasks() {
  const { tasks } = useTasks();

  return (
    <div className="page">
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>Due: {task.dueDate}</small> <br />
            <em>Status: {task.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
