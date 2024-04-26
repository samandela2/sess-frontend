import React, { useState, useEffect } from "react";
import Task, { TaskProps } from "../../components/Task_Component/Task";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import "./TaskPages.css";

const TaskPage = () => {
  const [task, setTask] = useState<TaskProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/taskData.json")
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error fetching Task data", error));
  }, []);

  if (!task) {
    return <div>Loading Task...</div>;
  }

  const handleModify = () => {
    console.log("Modifying task...");
  };
  const handleSave = () => {
    console.log("Saving task...");
  };
  const handleDelete = () => {
    console.log("Deleting task...");
    navigate("/home");
  };

  return (
    <div>
      <section className="taskInfo">
        <h2>Task</h2>
        {task.length > 0 && <Task {...task[0]} />}
      </section>
      <section className="actionSection">
        <div style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleModify}
          >
            Modify
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

export default TaskPage;
