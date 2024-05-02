import React, { useState, useEffect } from "react";
import TaskForm, {
  TaskFormProps,
  initNewTask,
} from "../../components/Task_Component/TaskForm";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/Interface";

const TaskPage = () => {
  const [task, setTask] = useState<Task>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/singleTaskData.json")
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
      </section>
      <TaskForm
        task={task}
        isNewTask={false}
        handleDelete={handleDelete}
        handleSubmit={handleSave}
      />
    </div>
  );
};

export default TaskPage;
