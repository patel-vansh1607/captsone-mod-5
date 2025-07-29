import React, { useState } from "react";
import { useTasks } from "../context/TaskContent"; // ✅ IMPORT CONTEXT HOOK

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [success, setSuccess] = useState(false);

  const { addTask } = useTasks(); // ✅ GET ADD FUNCTION

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    };

    addTask(newTask); // ✅ ADD TO CONTEXT
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("pending");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="page">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="deferred">Deferred</option>
        </select>
        <button type="submit">Add Task</button>
        {success && <p style={{ color: "green" }}>✅ Task added</p>}
      </form>
    </div>
  );
}

export default AddTask;
