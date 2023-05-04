import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Welcome back!</h2>
      <form>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login-btn">Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
