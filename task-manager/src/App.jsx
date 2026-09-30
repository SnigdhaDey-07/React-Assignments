import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <Routes>

            {/* Login Page */}
            <Route path="/login" element={<Login />} />

            {/* Protected Pages */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Layout />}>

                {/* Dashboard */}
                <Route index element={<Dashboard />} />

                {/* Tasks */}
                <Route path="tasks" element={<Tasks />} />

                {/* Add Task */}
                <Route path="add-task" element={<AddTask />} />

                {/* Dynamic Route */}
                <Route path="tasks/:id" element={<TaskDetails />} />

                {/* Completed Tasks */}
                <Route path="completed" element={<CompletedTasks />} />

              </Route>
            </Route>

          </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;