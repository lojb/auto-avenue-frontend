import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Icon } from "react-icons-kit";
import { eyeClosed } from "react-icons-kit/oct/eyeClosed";
import { eye } from "react-icons-kit/oct/eye";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
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

    await signup(email, password, username);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="text-center mb-8">Sign up</h3>

      <label>Username:</label>
      <input
        className="login-input"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label>Email:</label>
      <input
        className="login-input"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <div className="password-container">
        <input
          className="login-input"
          type={passwordType}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span className="passwordSpan" onClick={handleToggle}>
          <Icon icon={passwordIcon} size={25} />
        </span>
      </div>
      <button className="login-button" disabled={isLoading}>
        Sign Up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Register;
