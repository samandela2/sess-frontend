import React, { useState, useEffect } from "react";
import TaskForm, {
  TaskFormProps,
  initNewTask,
} from "../../components/Task_Component/TaskForm";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/Interface";

const NewTaskPage = () => {
  const [task, setTask] = useState<Task>();
  const navigate = useNavigate();

  const handleModify = () => {
    console.log("Modifying task...");
  };
  const handleSave = () => {
    console.log("Saving task...");
    navigate("/home");
  };
  const handleDelete = () => {
    console.log("Deleting task...");
    navigate("/home");
  };

  return (
    <div>
      <section className="taskInfo">
        <h2>New Task</h2>
      </section>
      <TaskForm
        task={initNewTask()}
        isNewTask={true}
        handleDelete={handleDelete}
        handleSubmit={handleSave}
      />
    </div>
  );
};

export default NewTaskPage;
