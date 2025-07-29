import React from 'react';
import Sidebar from './SideBar';
import "../style.css"

function Dashboard() {
  return (
    <div style={{ padding: '30px' }}>
      <Sidebar />
      <h1>Welcome to your SmartTasker Dashboard!</h1>
      <p>Manage your tasks, habits, and productivity here.</p>
    </div>
  );
}

export default Dashboard;
