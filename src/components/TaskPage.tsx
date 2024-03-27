import React, { useState, useEffect } from "react";

// Define the shape of a Task based on the backend Java class
type Task = {
  id: number;
  startTime: string; // Adjust if you use Date objects
  endTime: string; // Adjust if you use Date objects
  ownerId: number;
  clientId: number | null;
  location: string;
  type: string;
  description: string;
};

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Here you would fetch tasks from your backend instead of using mock data
    const fetchTasks = async () => {
      // const response = await fetch('your-api-endpoint/tasks');
      // const data = await response.json();
      // setTasks(data);

      // Mock data for demonstration purposes
      setTasks([
        {
          id: 1,
          startTime: "2024-03-15 13:00:00",
          endTime: "2024-03-15 14:00:00",
          ownerId: 123,
          clientId: 456,
          location: "Conference Room 1",
          type: "Meeting",
          description: "Discuss project milestones",
        },
        // Add more tasks as needed
      ]);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {/* You would add a table or other UI elements here to display the tasks */}
    </div>
  );
};

export default TasksPage;
