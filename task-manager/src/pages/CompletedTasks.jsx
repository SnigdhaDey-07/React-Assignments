import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function CompletedTasks() {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>♡ Completed Tasks</h1>
          <p>Look at everything you've accomplished!</p>
        </div>

        <Link to="/tasks" className="view-btn">
          View All Tasks
        </Link>
      </div>

      <div className="task-list">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">♡</div>
            <h2>No completed tasks yet</h2>
            <p>
              Complete a task and it will appear here.
            </p>

            <Link to="/tasks" className="submit-btn">
              View Tasks
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;