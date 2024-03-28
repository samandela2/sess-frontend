import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import React from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      (username === "john" && password === "pwd123") ||
      (username === "jane" && password === "abc456")
    ) {
      login();
      navigate("/home"); // Redirect to the Homepage on successful login
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f7f7f7" }}
    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <h1
          className="text-center"
          style={{ fontWeight: "bold", color: "#000", marginBottom: "24px" }}
        >
          SESS
        </h1>
        <p className="text-center" style={{ marginBottom: "24px" }}>
          Welcome to SESS
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          {/* Rest of your form elements */}
        </form>
        {/* Other UI elements like 'Forgot password?' and 'Get started' links */}
      </div>
    </div>
  );
}

export default Login;
