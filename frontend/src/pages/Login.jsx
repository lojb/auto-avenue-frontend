import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Icon } from "react-icons-kit";
import { eyeClosed } from "react-icons-kit/oct/eyeClosed";
import { eye } from "react-icons-kit/oct/eye";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeClosed);

  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordIcon(eye);
      setPasswordType("text");
    } else {
      setPasswordIcon(eyeClosed);
      setPasswordType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className="form-container">
      <h2>Welcome back!</h2>
      <form className="login-register-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={passwordType}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span className="passwordSpan" onClick={handleToggle}>
            <Icon icon={passwordIcon} size={25} />
          </span>
        </div>
        <button className="login-btn" disabled={isLoading}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
