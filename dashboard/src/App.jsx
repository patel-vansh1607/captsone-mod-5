import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

import Sidebar from './components/Sidebar';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import LandingPage from './components/Main';
import Gemini_AI from './components/Gemini_ai';
import ProtectedRoute from './components/ProtectedRoute';

import Register from './auth/Register';
import Login from './auth/Login';

import { useAuth } from './context/AuthProvider';
/* import PomodoroTimer from './components/Pomodro';
 */import Stats from './components/Stats';
import Dashboard from './components/Dashboard';

const App = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex h-full">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addTask"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allTask"
          element={
            <ProtectedRoute>
              <AllTasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completeTask"
          element={
            <ProtectedRoute>
              <CompleteTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pendingTask"
          element={
            <ProtectedRoute>
              <PendingTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deployedTask"
          element={
            <ProtectedRoute>
              <Deployed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deferredTask"
          element={
            <ProtectedRoute>
              <Deferred />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inProgressTask"
          element={
            <ProtectedRoute>
              <InProgressTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/statsTask"
          element={
            <ProtectedRoute>
              <AllTasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/geminiAi"
          element={
            <ProtectedRoute>
              <Gemini_AI />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasksAI"
          element={
            <ProtectedRoute>
              <Gemini_AI />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/pomodro"
          element={
            <ProtectedRoute>
              <PomodoroTimer />
            </ProtectedRoute>
          }
        /> */}<Route
          path="/stats"
          element={
            <ProtectedRoute>
              <Stats />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
