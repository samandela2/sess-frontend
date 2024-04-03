import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import SchedulePage from "./components/SchedulePage";
import Logoff from "./components/Logoff";
import React from "react";
import ClientDetailPage from "./components/ClientDetailPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/client-details" element={<ClientDetailPage />} />
          <Route path="/logoff" element={<Logoff />} />

          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
