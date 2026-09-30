import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { tasks, updateTask, deleteTask, completeTask } = useTasks();

  const task = tasks.find((item) => item.id === id);

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(
    task?.description || ""
  );
  const [priority, setPriority] = useState(
    task?.priority || "Medium"
  );
  const [category, setCategory] = useState(
    task?.category || "Academic"
  );

  if (!task) {
    return (
      <div className="page">
        <div className="empty-state">
          <div className="empty-icon">♡</div>

          <h2>Task Not Found</h2>

          <p>
            The task you are looking for does not exist.
          </p>

          <button
            className="submit-btn"
            onClick={() => navigate("/tasks")}
          >
            Back to Tasks
          </button>
        </div>
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    updateTask(id, {
      title,
      description,
      priority,
      category,
    });

    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(id);
      navigate("/tasks");
    }
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>♡ Task Details</h1>
          <p>View and manage your task.</p>
        </div>

        <button
          className="view-btn"
          onClick={() => navigate("/tasks")}
        >
          ← Back to Tasks
        </button>
      </div>

      {!isEditing ? (
        <div className="details-card">

          <div className="details-header">
            <div>
              <h2>{task.title}</h2>

              <span
                className={`priority ${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>
            </div>
          </div>

          <div className="details-description">
            <h3>Description</h3>
            <p>{task.description}</p>
          </div>

          <div className="details-grid">

            <div className="detail-item">
              <span>Category</span>
              <strong>{task.category}</strong>
            </div>

            <div className="detail-item">
              <span>Status</span>
              <strong>{task.status}</strong>
            </div>

            <div className="detail-item">
              <span>Raised Date & Time</span>
              <strong>{task.raisedDate}</strong>
            </div>

            <div className="detail-item">
              <span>Due Date</span>
              <strong>{task.dueDate}</strong>
            </div>

          </div>

          <div className="details-actions">

            {task.status !== "Closed" && (
              <button
                className="complete-btn"
                onClick={handleComplete}
              >
                ✓ Mark as Completed
              </button>
            )}

            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              ✎ Edit Task
            </button>

            <button
              className="delete-btn"
              onClick={handleDelete}
            >
              Delete Task
            </button>

          </div>

        </div>
      ) : (
        <div className="form-card">

          <form onSubmit={handleUpdate}>

            <div className="form-group">
              <label>Task Header</label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Task Description</label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows="5"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Priority</label>

                <select
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value)
                  }
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="form-group">
                <label>Category</label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >
                  <option value="Academic">Academic</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-btn"
              >
                ♡ Save Changes
              </button>

            </div>

          </form>

        </div>
      )}

    </div>
  );
}

export default TaskDetails;