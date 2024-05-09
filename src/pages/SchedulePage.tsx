import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import TaskCalendar from "../components/Schedule_Component/TaskCalendar";

const SchedulePage = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Please log in to view the schedule.</div>;
  }

  return (
    <div>
      <h1>Schedule</h1>
      <TaskCalendar />
    </div>
  );
};

export default SchedulePage;

/***
 * 
 * import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";




 * const ResourceCalendar: React.FC = () => {
  // Define initial resources and events
  const initialResources = [
    { id: "a", title: "User A" },
    { id: "b", title: "User B" },
    { id: "c", title: "User C" },
    { id: "fdsa", title: "User D" },
    { id: "1", title: "User E" },
    { id: "f", title: "User F" },
    { id: "g", title: "User G" },
    { id: "h", title: "User H" },
    { id: "i", title: "User I" },
    { id: "j", title: "User J" },
  ];

  const initialEvents = [
    {
      extendedProps: {
        name: "John Doe",
        phone: "415-519-1111",
        address: "123 Main St",
        type: "New",
      },

      start: "2024-05-08T09:00:00",
      end: "2024-05-08T10:00:00",
      resourceId: "a",
    },
    {
      extendedProps: { description: "This is a new event!" },
      start: "2024-05-08T11:00:00",
      end: "2024-05-08T12:00:00",
      resourceId: "b",
    },
  ];

  const [resources, setResources] = useState(initialResources);
  const [events, setEvents] = useState(initialEvents);

  // Example function to add an event dynamically
  const addEvent = () => {
    const newEvent = {
      extendedProps: { description: "This is a new event!" },
      start: "2024-05-08T11:00:00",

      end: "2024-05-08T15:00:00",
      resourceId: "a",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Schedule</h1>

      <button onClick={addEvent}>Add Event</button>

      <FullCalendar
        plugins={[timeGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        slotMinTime={"08:00:00"}
        slotMaxTime={"17:00:00"}
        expandRows={true}
        resources={resources}
        events={events}
        eventContent={(eventInfo) => (
          <div style={{ backgroundColor: eventInfo.event.backgroundColor }}>
            <b>{eventInfo.timeText}</b> <br />
          </div>
        )}
        // headerToolbar={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "timeGridWeek,timeGridDay",
        // }}
      />
    </div>
  );
};

export default ResourceCalendar;
 */
