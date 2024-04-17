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
      // fetch("/normalUserData.json") // Uncomment to fetch data for normal users
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
      {user.length > 0 && user[0].role === "ADMIN" && (
        <section>
          <h2>Admin Actions</h2>
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
