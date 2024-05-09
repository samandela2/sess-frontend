import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

const initResources = () => {};
const initEvents = () => {};

export default function TaskCalendar() {
  const [resources, setResources] = useState(initResources);
  const [events, setEvents] = useState(initEvents);

  const addEvent = () => {};

  return (
    <div>
      <button onClick={addEvent}>Add Event</button>
      <FullCalendar
        plugins={[timeGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        slotMinTime={"08:00:00"}
        slotMaxTime={"18:00:00"}
        expandRows={true}
      />
    </div>
  );
}
