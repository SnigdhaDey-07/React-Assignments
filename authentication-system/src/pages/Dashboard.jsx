import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        {/* Header */}
        <div className="dashboard-header">

          <div className="dashboard-icon">
            🌸
          </div>

          <div>
            <h1>Welcome, {user?.username}! 💕</h1>

            <p>
              You have successfully logged in.
            </p>
          </div>

        </div>

        {/* Success */}
        <div className="success-box">
          <span>✓</span>

          <div>
            <strong>Authentication Successful</strong>

            <p>
              You are viewing a protected dashboard.
            </p>
          </div>
        </div>

        {/* User Information */}
        <div className="dashboard-section">

          <h2>👤 User Information</h2>

          <div className="info-box">

            <div className="info-row">
              <span>Username</span>
              <strong>{user?.username}</strong>
            </div>

            <div className="info-row">
              <span>Status</span>

              <strong className="online-status">
                ● Logged In
              </strong>
            </div>

          </div>

        </div>

        {/* JWT */}
        <div className="dashboard-section">

          <h2>🔐 Authentication Details</h2>

          <div className="token-box">

            <div className="token-label">
              Simulated JWT Token
            </div>

            <code>
              {user?.token}
            </code>

          </div>

          <p className="simulation-note">
            This token is simulated for the assignment
            and is not a real backend JWT.
          </p>

        </div>

        {/* Logout */}
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;