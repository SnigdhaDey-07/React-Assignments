import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const getPasswordStrength = (value) => {
    if (!value) {
      return {
        label: "",
        percentage: 0,
      };
    }

    let score = 0;

    if (value.length >= 6) score++;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) {
      return {
        label: "Weak",
        percentage: 25,
      };
    }

    if (score <= 3) {
      return {
        label: "Medium",
        percentage: 60,
      };
    }

    return {
      label: "Strong",
      percentage: 100,
    };
  };

  const strength = getPasswordStrength(password);

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    login(username.trim(), password, remember);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="login-card">

        <div className="login-header">

          <div className="login-icon">
            🔐
          </div>

          <h1>Welcome Back</h1>

          <p>Login to your account</p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="input-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);

                if (errors.username) {
                  setErrors({
                    ...errors,
                    username: "",
                  });
                }
              }}
            />

            {errors.username && (
              <span className="error-message">
                {errors.username}
              </span>
            )}

          </div>

          {/* Password */}
          <div className="input-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);

                  if (errors.password) {
                    setErrors({
                      ...errors,
                      password: "",
                    });
                  }
                }}
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

            {errors.password && (
              <span className="error-message">
                {errors.password}
              </span>
            )}

          </div>

          {/* Password Strength */}
          {password && (
            <div className="strength-container">

              <div className="strength-top">

                <span>
                  Password Strength
                </span>

                <span
                  className={`strength-text ${strength.label.toLowerCase()}`}
                >
                  {strength.label}
                </span>

              </div>

              <div className="strength-bar">

                <div
                  className={`strength-fill ${strength.label.toLowerCase()}`}
                  style={{
                    width: `${strength.percentage}%`,
                  }}
                />

              </div>

            </div>
          )}

          {/* Remember Me */}
          <div className="remember-row">

            <label className="remember-label">

              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(e.target.checked)
                }
              />

              <span>
                Remember me
              </span>

            </label>

          </div>

          {/* Login */}
          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <div className="login-footer">
          <p>Authentication System</p>
        </div>

      </div>

    </div>
  );
}

export default Login;