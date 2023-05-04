import React from "react";

const Register = () => {
    return (
        <div className="form-container">
      <h2>Welcome to us!</h2>
      <form>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login-btn">Register</button>
      </form>
      </div>
    )
}

export default Register