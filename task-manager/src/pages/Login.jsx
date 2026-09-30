import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(username, password);

    if (success) {
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>♡ Task Manager</h1>

        <p className="login-subtitle">
          Login to manage your tasks
        </p>

        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            placeholder="Enter username"
            required
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter password"
            required
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            className="login-btn"
            type="submit"
          >
            ♡ Login
          </button>

        </form>

        <div className="login-hint">
          <strong>Demo Login</strong>
          <p>Username: admin</p>
          <p>Password: 1234</p>
        </div>

      </div>
    </div>
  );
}

export default Login;