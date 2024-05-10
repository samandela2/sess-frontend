import "./Task.css";
import { Task } from "../../types/Interface";
import { useEffect, useState } from "react";
import "./TaskForm.css";

export interface TaskFormProps {
  task: Task;
  isNewTask: boolean;
  handleDelete: () => void;
  handleSubmit: () => void;
}

export const initNewTask = (): Task => {
  return {
    taskId: 0,
    startTime: "",
    endTime: "",
    location: "",
    type: "",
    clientId: undefined,
    ownerId: 0,
    comment: undefined,
  };
};

export default function TaskForm({
  task,
  isNewTask,
  handleDelete,
  handleSubmit,
}: TaskFormProps) {
  const [taskInfo, setTaskInfo] = useState<Task>(task);
  const [isEditable, setIsEditable] = useState(isNewTask);

  useEffect(() => {
    setTaskInfo(task);
  }, [task]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTaskInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    console.log([name] + " : " + value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setTaskInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    console.log([name] + " : " + value);
  };

  const handleModify: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsEditable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="datetime-local"
          aria-label="Date and time"
          className="form-control"
          id="floatingInputDisabled"
          name="startTime"
          value={taskInfo.startTime}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Start Time</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="datetime-local"
          aria-label="Date and time"
          className="form-control"
          id="floatingInputDisabled"
          name="endTime"
          value={taskInfo.endTime}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">End Time</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="location"
          value={taskInfo.location}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Location</label>
      </div>

      <div className="form-floating mb-3">
        <select
          className="form-select form-select-sm mb-3"
          aria-label="Small select example"
          value={taskInfo.type}
          disabled={!isEditable}
          name="type"
          onChange={handleSelectChange}
        >
          <option selected>Type</option>
          <option value="appointment">Appointment</option>
          <option value="event">Event</option>
        </select>
        <label htmlFor="floatingInputDisabled">Type</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="clientId"
          value={taskInfo.clientId ? taskInfo.clientId : 0}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Client ID</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="ownerId"
          value={taskInfo.ownerId}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Owner ID</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputDisabled"
          name="comment"
          value={taskInfo.comment ? taskInfo.comment : ""}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
        <label htmlFor="floatingInputDisabled">Comment</label>
      </div>

      <section className="actionSection">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleModify}
          hidden={isNewTask}
        >
          Modify
        </button>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </form>
  );
}
