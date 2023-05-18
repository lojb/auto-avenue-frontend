import React, { useState, useEffect } from "react";
import { state } from "../store";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState(1);

  useEffect(() => {
    console.log(snap.username);
    console.log(snap.isUser);
  }, [snap.username, snap.isUser]);

  const handleSubmit = () => {
    const formData = {
      username,
      email,
      password,
      role,
    };

    if (
      email === emailConfirm &&
      password === passwordConfirm &&
      username !== "" &&
      email !== "" &&
      password !== ""
    ) {
      state.username = username;
      state.isUser = true;

      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      setUsername("");
      setEmail("");
      setEmailConfirm("");
      setPassword("");
      setPasswordConfirm("");
      navigate("/");
    }
  };

  return (
    <div className="form-container mt-[7%]">
      <h2>Welcome to us!</h2>
      <form className="login-register-form">
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="confirm-email">Confirm Email</label>
          <input
            type="text"
            id="confirm-email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <button
          className="login-btn"
          //disabled={!(email === emailConfirm && password === passwordConfirm && username !== "" && email !== "" && password !== "")}
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
