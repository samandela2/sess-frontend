import React, { useState } from "react";

const Login_temp = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from being submitted to the server traditionally
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include", // If your backend handles sessions
      });
      console.log(response);

      if (response.ok) {
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const data = await response.json();
          console.log("Login Successful:", data.message, data.jwt);
        } else {
          console.log("Response not JSON");
        }
      } else {
        // Handle errors, for example invalid login credentials
        const errorData = await response.json();
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login_temp;
