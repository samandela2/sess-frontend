import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Auth_Component/Login";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import SchedulePage from "./pages/SchedulePage";
import ClientSearchPage from "./pages/Client/ClientSearchPage";
import Logoff from "./components/Auth_Component/Logoff";

import ClientDetailPage from "./pages/Client/ClientDetailPage";
import TaskDetailPage from "./pages/Task/TaskDetailPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
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
  );
}

export default App;
