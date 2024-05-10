import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Alert from "../components/Alert";

import UserBasic, {
  UserBasicProps,
} from "../components/User_Component/UserBasic";
import TaskBasic, {
  TaskBasicProps,
} from "../components/Task_Component/TaskBasic";

import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const Homepage = () => {
  const [userBasic, setUserBasic] = useState<UserBasicProps[]>([]);
  const [taskBasics, setTaskBasics] = useState<TaskBasicProps[]>([]);
  const adminDataUrl = "/adminUserData.json";
  const normalUserDataUrl = "/normalUserData.json";
  const taskBasicsUrl = "/taskData.json";

  useEffect(() => {
    fetch(adminDataUrl)
      // fetch("/normalUserData.json") // Uncomment to fetch data for normal users
      .then((response) => response.json())
      .then((data) => setUserBasic(data))
      .catch((error) => console.error("Fetching user data fail", error));
  }, []);

  useEffect(() => {
    fetch(taskBasicsUrl)
      .then((response) => response.json())
      .then((data) => setTaskBasics(data))
      .catch((error) => console.error("Fetching tasks basic data fail", error));
  }, []);

  const [showAlert, setShowAlert] = useState(false);

  const generateReport = () => {
    console.log("Generating report...");
    setShowAlert(true);
  };

  return (
    <div>
      <section className="profileBasic">
        <h2>Profile</h2>
        {userBasic.length > 0 && <UserBasic {...userBasic[0]} />}
      </section>

      <section className="scheduleBasic">
        <h2>My Schedule</h2>
        <ul>
          {taskBasics.map((taskBasics) => (
            <TaskBasic key={taskBasics.taskId} {...taskBasics} />
          ))}
        </ul>
      </section>

      {/* General section for all users */}
      <section className="general-actions">
        <h2>General Actions</h2>
        <LinkContainer to="/schedule">
          <Button variant="success">Check Schedule</Button>
        </LinkContainer>
      </section>

      {/* Admin specific section */}
      {userBasic.length > 0 && userBasic[0].role === "ADMIN" && (
        <section className="admin-actions">
          <h2>Admin Actions</h2>
          {/* <div className="input-group mb-3 custom-search-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search client (Admin)"
              aria-label="Search client"
            />
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div> */}
          <Button
            variant="primary"
            style={{ marginRight: "10px" }}
            onClick={generateReport}
          >
            Generate report
          </Button>

          {showAlert && (
            <Alert onClose={() => setShowAlert(false)}>
              Report generated successfully!
            </Alert>
          )}

          <Link to="/newTask" className="btn btn-primary my-2">
            Create Appointment
          </Link>
        </section>
      )}
    </div>
  );
};

export default Homepage;
