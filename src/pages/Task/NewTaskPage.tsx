import React, { useEffect, useState } from "react";
import Task, {
  TaskProps,
  initNewTask,
} from "../../components/Task_Component/Task";
import "./TaskPages.css";

const NewTaskPage = () => {
  const [task, setTask] = useState<TaskProps>(initNewTask());

  const handleDelete = () => {
    console.log("Disgrading change");
  };
  const handleCreate = () => {
    console.log("Creating appointment");
  };

  useEffect(() => {}, []);

  return (
    <div>
      <section className="newTaskInfo">
        <h2>Create a New Task</h2>
        <Task {...task} />
      </section>
      <section className="actionSection">
        <div style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreate}
          >
            Create
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

export default NewTaskPage;
