import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import TaskCalendar from "../components/Schedule_Component/TaskCalendar";

const SchedulePage = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Please log in to view the schedule.</div>;
  }

  return (
    <div>
      <h1>Schedule</h1>
      <TaskCalendar />
    </div>
  );
};

export default SchedulePage;
