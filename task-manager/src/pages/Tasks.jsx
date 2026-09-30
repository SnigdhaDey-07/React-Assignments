import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks } = useTasks();

  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      statusFilter === "All" || task.status === statusFilter;

    const priorityMatch =
      priorityFilter === "All" || task.priority === priorityFilter;

    const categoryMatch =
      categoryFilter === "All" || task.category === categoryFilter;

    return statusMatch && priorityMatch && categoryMatch;
  });

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>♡ All Tasks</h1>
          <p>Manage, filter and organize your tasks.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-card">
        <div className="filter-group">
          <label>Status</label>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Raised">Raised</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Priority</label>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Category</label>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Academic">Academic</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">♡</div>

            <h2>No Tasks Found</h2>

            <p>
              There are no tasks matching your selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;