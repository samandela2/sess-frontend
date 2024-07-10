import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Alert from "../components/Alert";

import UserBasic from "../components/User_Component/UserBasic";
import TaskBasic from "../components/Task_Component/TaskBasic";

import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { endpoints } from "../services/api";
import { fetchWithToken } from "../utils/helper";
import { TaskProps, UserProps } from "../types/Interface";

const Homepage = () => {
  const [user, setUser] = useState<UserProps>();
  const [taskBasics, setTaskBasics] = useState<TaskProps[]>([]);
  const adminDataUrl = "/adminUserData.json";
  const normalUserDataUrl = "/normalUserData.json";
  const taskBasicsUrl = "/taskData.json";

  // useEffect(() => {
  //   fetch(adminDataUrl)
  //     // fetch("/normalUserData.json") // Uncomment to fetch data for normal users
  //     .then((response) => response.json())
  //     .then((data) => setUserBasic(data))
  //     .catch((error) => console.error("Fetching user data fail", error));
  // }, []);

  useEffect(() => {
    fetchWithToken(endpoints.home)
      .then((response) => {
        console.log("response", response);
        return response?.json();
      })
      .then((data) => {
        console.log("data", data);
        setUser(data.user);
        setTaskBasics(data.tasks);
        console.log("user", user);
      })
      .catch((error) => console.error("Fetching user data fail", error));
  }, []);

  // useEffect(() => {
  //   fetch(taskBasicsUrl)
  //     .then((response) => response.json())
  //     .then((data) => setTaskBasics(data))
  //     .catch((error) => console.error("Fetching tasks basic data fail", error));
  // }, []);

  const [showAlert, setShowAlert] = useState(false);

  const generateReport = () => {
    console.log("Generating report...");
    setShowAlert(true);
  };

  return (
    <div>
      <section className="profileBasic">
        <h2>Profile</h2>
        {user && <UserBasic {...user} />}
      </section>

      <section className="scheduleBasic">
        <h2>My Schedule</h2>
        <ul>
          {/* {taskBasics.map((taskBasics) => (
            <TaskBasic key={taskBasics.taskId} {...taskBasics} />
          ))} */}
        </ul>
      </section>

      {/* General section for all users */}
      <section className="general-actions">
        <h2>General Actions</h2>
        <LinkContainer to="/schedule">
          <Button variant="success">Check Schedule</Button>
        </LinkContainer>
      </section>

      {user && user.role === "ROLE_ADMIN" && (
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
