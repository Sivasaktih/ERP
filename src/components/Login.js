import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful! Now log in.");
    setIsLogin(true); // Switch to login form after signup
  };

  return (
    <div className="form-structor">
      {isLogin ? (
        // Login Form
        <div className="login">
          <div className="center">
            <h2 className="form-title">Log in</h2>
            <div className="form-holder">
              <input
                type="email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button className="submit-btn" onClick={handleLogin}>
              Log in
            </button>
            <p>
              Don't have an account?{" "}
              <button className="link" onClick={() => setIsLogin(false)}>
                Sign up
              </button>
            </p>
          </div>
        </div>
      ) : (
        // Signup Form
        <div className="signup">
          <h2 className="form-title">Sign up</h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="submit-btn" onClick={handleSignup}>
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <button className="link" onClick={() => setIsLogin(true)}>
              Log in
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
