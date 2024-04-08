export interface TaskBasicProps {
  taskId: number;
  startTime: string;
  location: string;
  type: string;
}

const TaskBasic = ({ taskId, startTime, location, type }: TaskBasicProps) => {
  return (
    <div>
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
