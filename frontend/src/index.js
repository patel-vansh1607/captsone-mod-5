import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContent"; // ✅ IMPORT CONTEXT

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TaskProvider>
      <App />
    </TaskProvider>
  </BrowserRouter>
);
