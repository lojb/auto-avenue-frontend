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
    <form className="login-form" onSubmit={handleSubmit}>
      <h3 className="text-center mb-8 font-extrabold">Welcome back!</h3>

      <label className="login-form-label">Username:</label>
      <input
        className="login-form-input"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label className="login-form-label">Password:</label>
      <div className="password-container">
        <input
          className="login-form-input login-form-password"
          type={passwordType}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span className="login-form-password-icon" onClick={handleToggle}>
          <Icon icon={passwordIcon} size={25} />
        </span>
      </div>
      <button className="login-form-button" disabled={isLoading}>
        Login
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
