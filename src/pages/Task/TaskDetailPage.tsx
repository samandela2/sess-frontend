import React, { useState, useEffect } from "react";
import Task, { TaskProps } from "../../components/Task_Component/Task";

const TaskPage = () => {
  const [task, setTask] = useState<TaskProps[]>([]);

  useEffect(() => {
    fetch("/taskData.json") // path to your json file
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error fetching Task data", error));
  }, []);

  if (!task) {
    return <div>Loading Task...</div>; // Or some loading spinner
  }

  return (
    <div>
      <section>
        <h2>Task</h2>
        {task.length > 0 && <Task {...task[0]} />}
      </section>
      <section>
        <button type="button" className="btn btn-primary">
          Modify
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </section>
    </div>
  );
};

export default TaskPage;
