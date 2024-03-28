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
import TaskPage from "./components/TaskPage";
import React from "react";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/task-page" element={<TaskPage />} />
          <Route path="/logoff" element={<Logoff />} />

          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
