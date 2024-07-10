import React, { useState, useEffect } from "react";
import TaskForm, {
  TaskFormProps,
  initNewTask,
} from "../../components/Task_Component/TaskForm";
import { useNavigate } from "react-router-dom";
import { TaskProps } from "../../types/Interface";
import { fetchWithToken } from "../../utils/helper";

const NewTaskPage = () => {
  console.log("NewTaskPage mounted");
  const [task, setTask] = useState<TaskProps>();
  const navigate = useNavigate();

  const handleModify = () => {
    console.log("Modifying task...");
  };
  const handleSave = async () => {
    console.log("Saving task...");
    console.log("Task to save", JSON.stringify(task));

    try {
      const response = await fetchWithToken("/tasks", {
        method: "POST",
        body: JSON.stringify(task),
      });

      if (response && response.ok) {
        const data = await response.json();
        console.log("Task saved", data);
        // navigate("/home");
      } else {
        throw new Error("Task not saved");
      }
    } catch (error) {
      console.error("Error saving task", error);
      alert("Error saving task: " + error);
    }
  };
  const handleDelete = () => {
    console.log("Deleting task...");
    navigate("/home");
  };

  // useEffect(() => {
  //   console.log("NewTaskPage mounted");
  //   const fetchData = async () => {
  //   try {
  //     const response = await fetchWithToken("/tasks");

  //     if (response && response.ok) {
  //       console.log("Tasks loaded successfully");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while loading page:", error);
  //   }
  // };

  // fetchData();
  // }, []);

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
