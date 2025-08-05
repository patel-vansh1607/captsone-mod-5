  import React, { useEffect, useState } from "react";
  import Sidebar from "../components/Sidebar";
  import { Link } from "react-router-dom";
  import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import { motion } from "framer-motion";

  const Dashboard = () => {
    const [quote, setQuote] = useState("");
    const [completedTasks, setCompletedTasks] = useState(14);
    const [totalTasks, setTotalTasks] = useState(23); // Update dynamically if needed

    const hour = new Date().getHours();
    const getGreeting = () => {
      if (hour < 12) return "Good morning 🌅";
      if (hour < 18) return "Good afternoon ☀️";
      return "Good evening 🌙";
    };

    useEffect(() => {
      fetch("https://zenquotes.io/api/random")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data[0]?.q) {
            setQuote(`${data[0].q} — ${data[0].a}`);
          } else {
            setQuote("Keep pushing forward, no matter what!");
          }
        })
        .catch(() => {
          setQuote("Stay motivated and keep going!");
        });
    }, []);

    return (
      <div className="flex min-h-screen poppins">
        <Sidebar />

        <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-indigo-700 mb-2">
              {getGreeting()}, welcome to Taskee Dashboard 👋
            </h1>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl italic">
              “{quote || "Loading a motivational quote..."}”
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl p-6 mb-6 shadow-md">
            <h2 className="text-2xl font-bold">Let’s make today productive 🎯</h2>
            <p className="mt-1">One step at a time, one task at a time.</p>
          </div>

          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md border border-yellow-300 shadow mb-6">
            ⏳ Haven’t used the Pomodoro Timer today? Stay focused and plant trees
            while working!
            <Link
              to="/pomodro"
              className="ml-2 underline text-yellow-900 font-semibold"
            >
              Open Timer
            </Link>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-200 shadow mb-6">
            💡 <strong>AI Tip:</strong> Group your tasks using priority tags to
            focus better and reduce clutter.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-5 rounded-lg shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                🎯 Focus of the Day
              </h2>
              <p className="mt-2 text-gray-600">
                Complete 5 pending tasks and review your deployed features.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-5 rounded-lg shadow flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                📈 Task Completion
              </h2>
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={completedTasks}
                  maxValue={totalTasks}
                  text={`${Math.round((completedTasks / totalTasks) * 100)}%`}
                  styles={buildStyles({
                    pathColor: "#6366f1",
                    textColor: "#1f2937",
                    trailColor: "#e5e7eb",
                  })}
                />
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                You’ve completed {completedTasks} out of {totalTasks} tasks.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-5 rounded-lg shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                ⏰ Upcoming Deadlines
              </h2>
              <ul className="mt-2 text-gray-600 list-disc list-inside text-sm">
                <li>Design Landing Page - Aug 6</li>
                <li>Fix Login Bugs - Aug 7</li>
                <li>Team Review Meeting - Aug 9</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-5 rounded-lg shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                🔥 Productivity Tips
              </h2>
              <p className="mt-2 text-gray-600">
                Use the Pomodoro timer to stay focused. Don’t forget to take short
                breaks!
              </p>
              <p className="text-green-700 mt-2 font-medium">
                🔥 Streak: 3 productive days in a row!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;
