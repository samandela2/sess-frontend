import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from being submitted to the server traditionally

    login(username, password);
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <div className="text-center mb-4">
        <h1 className="login-title">SESS</h1>{" "}
        {/* Custom class for styling the title */}
        <p className="login-message">Welcome to SESS</p>{" "}
        {/* Custom class for the message */}
      </div>

      <div
        style={{
          width: "320px",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              // onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
