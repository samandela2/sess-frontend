import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

type ScheduleItem = {
  id: string;
  workerName: string;
  clientName: string;
  date: string;
  startTime: string;
  endTime: string;
};

function getRandomTimeSlot() {
  // Choose a random start hour between 8 AM (8) and 5 PM (17)
  let startHour = Math.floor(Math.random() * (17 - 8) + 8);
  // Random duration between 1 and 3 hours
  let duration = Math.floor(Math.random() * 3) + 1;
  let endHour = startHour + duration;

  // Convert 24-hour time to 12-hour format
  const formatTime = (hour: number) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${suffix}`;
  };

  let startTime = formatTime(startHour);
  let endTime = formatTime(endHour);

  // Adjust if the end time is beyond the working hours (e.g., past 5 PM)
  if (endHour >= 17) {
    endHour = 17; // Set to the end of the working day
    endTime = formatTime(endHour);
    if (endHour - duration <= 8) {
      // Ensure the meeting doesn't start before the working day begins
      startHour = 8;
      startTime = formatTime(startHour);
    } else {
      // Set the start time accordingly
      startTime = formatTime(endHour - duration);
    }
  }

  return { startTime, endTime };
}

function createMockSchedule(numItems: number): ScheduleItem[] {
  const mockData: ScheduleItem[] = [];
  const workerNames = ["Alex", "Sam", "Jordan", "Taylor"];
  const clientNames = ["Client A", "Client B", "Client C", "Client D"];

  for (let i = 1; i <= numItems; i++) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + i);
    const formattedDate = startDate.toISOString().split("T")[0];

    const { startTime, endTime } = getRandomTimeSlot();

    mockData.push({
      id: i.toString(),
      workerName: workerNames[Math.floor(Math.random() * workerNames.length)],
      clientName: clientNames[Math.floor(Math.random() * clientNames.length)],
      date: formattedDate,
      startTime,
      endTime,
    });
  }

  return mockData;
}

const handleNewAppointment = () => {
  // Logic to handle new appointment creation
};

const handleActions = () => {
  // Logic for actions, possibly showing a dropdown menu or modal with more options
};

const SchedulePage = () => {
  const { isAuthenticated } = useAuth();
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchedItems = createMockSchedule(10); // Generate 10 mock schedule items
      setScheduleItems(fetchedItems); // Update state with the mock data
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Please log in to view the schedule.</div>;
  }

  return (
    <div>
      <h1>Schedule</h1>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Worker Name</th>
              <th>Client Name</th>
            </tr>
          </thead>
          <tbody>
            {scheduleItems.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{item.workerName}</td>
                <td>{item.clientName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
