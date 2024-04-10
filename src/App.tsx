import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import SchedulePage from "./pages/SchedulePage";
import ClientSearchPage from "./pages/ClientSearchPage";
import Logoff from "./components/Logoff";
import React from "react";
import ClientDetailPage from "./components/ClientDetailPage";
import TaskDetailPage from "./pages/TaskDetailPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/task" element={<TaskDetailPage />} />
          <Route path="/client-search" element={<ClientSearchPage />} />
          <Route path="/client-details" element={<ClientDetailPage />} />
          <Route path="/logoff" element={<Logoff />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
