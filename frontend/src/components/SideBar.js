import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCheckCircle,
  FaHourglassHalf,
  FaSpinner,
  FaBan,
  FaPlus,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/" className="nav-item"><FaHome /><span>Dashboard</span></NavLink>
      <NavLink to="/completed" className="nav-item"><FaCheckCircle /><span>Completed</span></NavLink>
      <NavLink to="/pending" className="nav-item"><FaHourglassHalf /><span>Pending</span></NavLink>
      <NavLink to="/inprogress" className="nav-item"><FaSpinner /><span>In Progress</span></NavLink>
      <NavLink to="/deferred" className="nav-item"><FaBan /><span>Deferred</span></NavLink>
      <NavLink to="/add" className="nav-item"><FaPlus /><span>Add Task</span></NavLink>
    </div>
  );
}

export default Sidebar;
