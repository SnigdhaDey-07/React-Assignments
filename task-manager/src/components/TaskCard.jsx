import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, completeTask } = useTasks();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-info">
        <span>
          <strong>Category:</strong> {task.category}
        </span>

        <span>
          <strong>Status:</strong> {task.status}
        </span>

        <span>
          <strong>Due:</strong> {task.dueDate}
        </span>
      </div>

      <div className="task-actions">
        <Link
          to={`/tasks/${task.id}`}
          className="view-btn"
        >
          View Details
        </Link>

        {task.status !== "Closed" && (
          <button
            className="complete-btn"
            onClick={() => completeTask(task.id)}
          >
            Complete
          </button>
        )}

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;