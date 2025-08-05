import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';

import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

// Task Card
const Card = ({ label, count, bg }) => {
  return (
    <Link to='/allTask'>
      <div className="w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between cursor-pointer">
        <div className="h-full flex flex-1 flex-col justify-between">
          <p className="text-base text-gray-600">{label}</p>
          <span className="text-2xl font-semibold">{count}</span>
          <span className="text-sm text-gray-400">110 last month</span>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bg}`}>
          {label.charAt(0)}
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
};

// Main Stats Dashboard
const Stats = () => {
  const tasks = useSelector(selectAllTasks);

  // Count tasks by status
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const inProgress = tasks.filter(t => t.status === 'In Progress').length;
  const pending = tasks.filter(t => t.status === 'Pending').length;
  const deployed = tasks.filter(t => t.status === 'Deployed').length;
  const deferred = tasks.filter(t => t.status === 'Deferred').length;
  const total = tasks.length;

  const stats = [
    { label: "TOTAL TASK", total: total, bg: "bg-[#1d4ed8]" },
    { label: "COMPLETED TASK", total: completed, bg: "bg-[#0f766e]" },
    { label: "TASK IN PROGRESS", total: inProgress, bg: "bg-[#f59e0b]" },
    { label: "PENDING", total: pending, bg: "bg-[#be185d]" },
    { label: "DEPLOYED", total: deployed, bg: "bg-[#0ea5e9]" },
    { label: "DEFERRED", total: deferred, bg: "bg-[#6b7280]" },
  ];

  const COLORS = ['#0f766e', '#f59e0b', '#be185d', '#1d4ed8', '#0ea5e9', '#6b7280'];

  const chartData = [
    { name: 'Completed', value: completed },
    { name: 'In Progress', value: inProgress },
    { name: 'Pending', value: pending },
    { name: 'Deployed', value: deployed },
    { name: 'Deferred', value: deferred },
  ];

  const barData = [
    { status: 'Completed', count: completed },
    { status: 'In Progress', count: inProgress },
    { status: 'Pending', count: pending },
    { status: 'Deployed', count: deployed },
    { status: 'Deferred', count: deferred },
  ];

  const donutData = [
    { name: 'Completed', value: completed },
    { name: 'Not Completed', value: total - completed },
  ];

  const donutColors = ['#10b981', '#e5e7eb'];

  return (
    <>
      <Sidebar />
      <div className="mx-auto w-[85%]">
        <div className="flex flex-col w-full justify-between">
          <h1 className="text-3xl font-bold my-8 text-center">Task Dashboard</h1>

          {/* Stats Cards */}
          <div className="w-full mx-auto py-4 px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 place-item-center">
              {stats.map(({ label, total, bg }, index) => (
                <Card key={index} bg={bg} label={label} count={total} />
              ))}
            </div>
          </div>

          {/* Charts Section */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12">

            {/* Left Column Charts */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">

              {/* Pie Chart */}
              <div className="w-full h-[300px] bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4 text-center">Task Distribution</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Donut Chart */}
              <div className="w-full h-[300px] bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4 text-center">Completion Ratio</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={donutData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      label
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={donutColors[index % donutColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Column Chart (Bar) */}
            <div className="w-full md:w-1/2 h-[620px] bg-white shadow-md rounded-md p-4">
              <h2 className="text-lg font-semibold mb-4 text-center">Tasks by Status</h2>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#6366f1" barSize={45} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
