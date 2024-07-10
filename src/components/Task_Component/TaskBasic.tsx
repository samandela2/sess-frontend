import React from "react";
import "./TaskBasic.css";
import { TaskProps } from "../../types/Interface";

// export interface TaskBasicProps {
//   taskId: number;
//   startTime: string;
//   location: string;
//   type: string;
// }

const TaskBasic = ({ taskId, startTime, location, type }: TaskProps) => {
  return (
    <div className="TaskBasic">
      <p>
        <strong>Start Time:</strong> {startTime}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
    </div>
  );
};

export default TaskBasic;
