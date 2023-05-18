import {Link, redirect, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "../store";

const Login = () => {
    const [username, setUsername] = useState("");
    const snap = useSnapshot(state);
    const navigate = useNavigate();
    const handleLogin = () => {
        state.username = username;
        state.isUser = true;
        navigate("/");
    }
  return (
    <div className="form-container">
      <h2>Welcome back!</h2>
      <form className="login-register-form">
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
