import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import PendingTasks from "./pages/PendingTasks";
import CompletedTasks from "./pages/CompletedTasks";
import InProgressTasks from "./pages/InProgressTasks";
import DeferredTasks from "./pages/DeferredTasks";
import AllTasks from "./pages/Alltasks";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/pending" element={<PendingTasks />} />
        <Route path="/inprogress" element={<InProgressTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/deferred" element={<DeferredTasks />} />
        <Route path="/all" element={<AllTasks />} />
      </Routes>
    </>
  );
}

export default App;
