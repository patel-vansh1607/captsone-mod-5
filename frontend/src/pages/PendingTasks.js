import React from "react";
import { useTasks } from "../context/TaskContent";

function PendingTasks() {
  const { tasks } = useTasks();
  const filtered = tasks.filter((t) => t.status === "pending");

  return (
    <div className="page">
      <h2>Pending Tasks</h2>
      <ul>
        {filtered.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description} ({task.dueDate})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingTasks;
