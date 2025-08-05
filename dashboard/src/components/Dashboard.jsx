import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />


      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Taskee Dashboard 🚀</h1>

        <p className="text-gray-600 mb-6 max-w-3xl">
          This is your central place to manage all tasks effectively. Use the sidebar to navigate between completed tasks, pending items, deployed work, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600">🎯 Focus of the Day</h2>
            <p className="mt-2 text-gray-600">Complete 5 pending tasks and review your deployed features.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600">📊 Quick Stats</h2>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Completed: 14</li>
              <li>Pending: 6</li>
              <li>In Progress: 3</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600">🔥 Productivity Tips</h2>
            <p className="mt-2 text-gray-600">
              Use the Pomodoro timer to stay focused. Don’t forget to take short breaks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
