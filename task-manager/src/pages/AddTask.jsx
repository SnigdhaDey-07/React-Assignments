import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      title,
      description,
      priority,
      category,
    });

    navigate("/tasks");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>♡ Add New Task</h1>
          <p>Create a new task and keep everything organized.</p>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task Header</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Task Description</label>
            <textarea
              placeholder="Describe your task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
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
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Academic">Academic</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
          </div>

          <div className="automatic-info">
            <div>
              <span>♡ Raised Date & Time</span>
              <strong>Automatically picked</strong>
            </div>

            <div>
              <span>♡ Due Date</span>
              <strong>28 August 2026</strong>
            </div>

            <div>
              <span>♡ Initial Status</span>
              <strong>Raised</strong>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/tasks")}
            >
              Cancel
            </button>

            <button type="submit" className="submit-btn">
              ♡ Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;