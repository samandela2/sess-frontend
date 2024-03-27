import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Logoff = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  React.useEffect(() => {
    logout(); // Call the logout function from AuthContext
    // Maybe add a timeout before navigating to the login page
    setTimeout(() => navigate("/login"), 2000); // Adjust time as needed
  }, [logout, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>You have logged out.</h2>
      <p>To protect sensitive information, close your browser.</p>
    </div>
  );
};

export default Logoff;
