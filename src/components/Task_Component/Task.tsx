import "./Task.css";

export interface TaskProps {
  taskId: number;
  startTime: string;
  endTime: string;
  location: string;
  type: string;
  clientId?: number | string;
  ownerId: number;
  comment?: string | null;
}

export const initNewTask = (): TaskProps => {
  console.log("Init new task");
  return {
    taskId: 0,
    startTime: "",
    endTime: "",
    location: "",
    type: "",
    clientId: undefined,
    ownerId: 0,
    comment: null,
  };
};

const Task = ({
  taskId,
  startTime = "TBD",
  endTime = "TBD",
  location,
  type,
  clientId = "N/A",
  ownerId,
  comment = "",
}: TaskProps) => {
  return (
    <div className="Task">
      <p>
        <strong>Start Time:</strong> {startTime}
      </p>
      <p>
        <strong>End Time:</strong> {endTime}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>client ID:</strong> {clientId}
      </p>
      <p>
        <strong>Owner ID:</strong> {ownerId}
      </p>

      <p>
        <strong>Comment:</strong> {comment}
      </p>
    </div>
  );
};

export default Task;
