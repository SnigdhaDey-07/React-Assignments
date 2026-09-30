import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const defaultTasks = [
  {
    id: "1",
    title: "Complete React Assignment",
    description:
      "Complete the Task Manager assignment using React Router and Context API.",
    priority: "High",
    category: "Academic",
    raisedDate: new Date().toLocaleString(),
    dueDate: "2026-08-28",
    status: "Pending",
  },
  {
    id: "2",
    title: "Prepare Project Documentation",
    description:
      "Prepare documentation and screenshots for the project submission.",
    priority: "Medium",
    category: "Academic",
    raisedDate: new Date().toLocaleString(),
    dueDate: "2026-08-28",
    status: "Raised",
  },
  {
    id: "3",
    title: "Buy Birthday Gift",
    description:
      "Purchase a birthday gift and prepare a small birthday card.",
    priority: "Low",
    category: "Personal",
    raisedDate: new Date().toLocaleString(),
    dueDate: "2026-08-28",
    status: "Closed",
  },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskManagerTasks");

    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem(
      "taskManagerTasks",
      JSON.stringify(updatedTasks)
    );
  };

  // Add a new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description,
      priority: taskData.priority,
      category: taskData.category,
      raisedDate: new Date().toLocaleString(),
      dueDate: "2026-08-28",
      status: "Raised",
    };

    saveTasks([newTask, ...tasks]);
  };

  // Update an existing task
  const updateTask = (id, updatedData) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, ...updatedData }
        : task
    );

    saveTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    saveTasks(updatedTasks);
  };

  // Complete a task
  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: "Closed" }
        : task
    );

    saveTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TaskContext);
}