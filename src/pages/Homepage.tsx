import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import User, { UserProps } from "../components/User";
import TaskBasic, { TaskBasicProps } from "../components/TaskBasic";

/**
 * TODO:
 * Home:
 * Profile: Read Name,Role
 * Schedule: Read first 2 tasks with onClick navigation
 * Actions: Create Appointment(admin)
 *
 */

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
    fetch("/taskBasicsListData.json")
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

      <section>
        <h2>Schedule</h2>
        <ul>
          {taskBasics.map((taskBasics) => (
            <TaskBasic key={taskBasics.taskId} {...taskBasics} />
          ))}
        </ul>
      </section>

      <section>
        <h2>Actions</h2>
        {user.length > 0 && user[0].role === "ADMIN" && (
          <Link
            className="btn btn-outline-primary btn-black"
            to="/modify-appointment"
          >
            Create Appointment
          </Link>
        )}
      </section>

      {user.length > 0 && user[0].role === "ADMIN" && (
        <section>
          <h2>Client (admin only)</h2>
          {/* Replace with actual client search functionality */}
          <input type="search" placeholder="Search client" />
          <Link
            className="btn btn-outline-primary btn-black"
            to="/client-search"
          >
            Search
          </Link>
        </section>
      )}
    </div>
  );
};

export default Homepage;
