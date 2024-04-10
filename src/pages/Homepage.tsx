import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import User, { UserProps } from "../components/User";
import TaskBasic, {
  TaskBasicProps,
} from "../components/Task_Component/TaskBasic";

import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const Homepage = () => {
  const [user, setUser] = useState<UserProps[]>([]);
  const [taskBasics, setTaskBasics] = useState<TaskBasicProps[]>([]);

  useEffect(() => {
    fetch("/adminUserData.json")
      // fetch("/normalUserData.json")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Fetching user data fail", error));
  }, []);

  useEffect(() => {
    fetch("/taskData.json")
      .then((response) => response.json())
      .then((data) => setTaskBasics(data))
      .catch((error) => console.error("Fetching tasks basic data fail", error));
  }, []);

  return (
    <div>
      <section>
        <h2>Profile</h2>
        {user.length > 0 && <User {...user[0]} />}
      </section>

      <section className="Schedule">
        <h2>Schedule</h2>
        <ul>
          {taskBasics.map((taskBasics) => (
            <TaskBasic key={taskBasics.taskId} {...taskBasics} />
          ))}
        </ul>
      </section>

      {user.length > 0 && user[0].role === "ADMIN" && (
        <section>
          <h2>Actions</h2>
          <div className="input-group mb-3 custom-search-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search client (Admin)"
              aria-label="Search client"
            />
            <Link
              to="/client-search"
              className="btn btn-outline-secondary"
              type="button"
            >
              Search
            </Link>
          </div>

          <Link to="/appointment-slot" className="btn btn-primary my-2">
            Create Appointment
          </Link>
        </section>
      )}
    </div>
  );
};

export default Homepage;
