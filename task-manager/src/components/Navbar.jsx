import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Task<span>Manager</span>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Tasks
        </NavLink>

        <NavLink
          to="/add-task"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add Task
        </NavLink>

        <NavLink
          to="/completed"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Completed
        </NavLink>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;