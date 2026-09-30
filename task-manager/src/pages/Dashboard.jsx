import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const raisedTasks = tasks.filter(
    (task) => task.status === "Raised"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const academicTasks = tasks.filter(
    (task) => task.category === "Academic"
  ).length;

  const personalTasks = tasks.filter(
    (task) => task.category === "Personal"
  ).length;

  return (
    <div className="page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>♡ Welcome to Task Manager</h1>
          <p>Stay organized, productive and on top of everything.</p>
        </div>

        <Link to="/add-task" className="submit-btn">
          ♡ Add New Task
        </Link>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">♡</div>
          <div>
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">◷</div>
          <div>
            <h3>{raisedTasks}</h3>
            <p>Raised</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">◌</div>
          <div>
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
        </div>

      </div>

      {/* Summary */}
      <div className="dashboard-grid">

        <div className="summary-card">
          <h2>♡ Task Summary</h2>

          <div className="summary-row">
            <span>High Priority</span>
            <strong>{highPriorityTasks}</strong>
          </div>

          <div className="summary-row">
            <span>Academic</span>
            <strong>{academicTasks}</strong>
          </div>

          <div className="summary-row">
            <span>Personal</span>
            <strong>{personalTasks}</strong>
          </div>
        </div>

        <div className="summary-card">
          <h2>♡ Quick Actions</h2>

          <div className="quick-actions">
            <Link to="/tasks" className="quick-btn">
              View All Tasks
            </Link>

            <Link to="/add-task" className="quick-btn">
              Add New Task
            </Link>

            <Link to="/completed" className="quick-btn">
              Completed Tasks
            </Link>
          </div>
        </div>

      </div>

      {/* Recent Tasks */}
      <div className="recent-section">
        <div className="section-heading">
          <div>
            <h2>♡ Recent Tasks</h2>
            <p>Your latest tasks</p>
          </div>

          <Link to="/tasks" className="view-btn">
            View All
          </Link>
        </div>

        <div className="recent-tasks">

          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">♡</div>
              <h2>No tasks yet</h2>
              <p>Create your first task to get started.</p>

              <Link to="/add-task" className="submit-btn">
                Create Task
              </Link>
            </div>
          ) : (
            tasks.slice(0, 3).map((task) => (
              <div className="mini-task" key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>
                    {task.category} • {task.priority} Priority
                  </p>
                </div>

                <span className={`priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
}

export default Dashboard;