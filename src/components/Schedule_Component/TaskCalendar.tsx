import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { UserProps } from "../User_Component/User";
import { Task } from "../../types/Interface";

const userListUrl = "/UserList.json";
const taskonSingleDayUrl = "/taskSingleDay.json";

// export interface TaskCalendarProps {
//   users: UserBasicProps[];
//   tasks: TaskBasicProps[];
// }

const fetchUserList = async (): Promise<UserProps[]> => {
  const response = await fetch(userListUrl);
  const data = await response.json();
  return data.map((UserBasic: any) => ({
    id: UserBasic.id,
    username: UserBasic.username,
    role: UserBasic.role,
  }));
};

const fetchTaskList = async (): Promise<Task[]> => {
  const response = await fetch(taskonSingleDayUrl);
  const data = await response.json();
  return data.map((TaskBasic: any) => ({
    id: TaskBasic.taskId,
    clientId: TaskBasic.clientId,
    startTime: TaskBasic.startTime,
    endTime: TaskBasic.endTime,
    location: TaskBasic.location,
    type: TaskBasic.type,
    ownerId: TaskBasic.ownerId,
  }));
};

export default function TaskCalendar() {
  const [resources, setResources] = useState<UserProps[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const toISODate = (dateTimeStr: string): string => {
    if (dateTimeStr.length < 19) {
      return dateTimeStr.replace(" ", "T0");
    } else {
      return dateTimeStr.replace(" ", "T");
    }
  };
  useEffect(() => {
    const loadResources = async () => {
      const user = await fetchUserList();
      setResources(user);
      console.log(user);
    };
    const loadTasks = async () => {
      const task = await fetchTaskList();
      setTasks(task);
      console.log(task);
    };
    loadResources();
    loadTasks();
  }, []);

  const addEvent = () => {};

  return (
    <div>
      <button onClick={addEvent}>Add Event</button>
      <FullCalendar
        plugins={[timeGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        resources={resources.map((user) => ({
          id: user.id.toString(),
          title: user.username,
        }))}
        events={tasks.map((task) => ({
          title: task.clientId?.toString(),
          start: toISODate(task.startTime),
          end: toISODate(task.endTime),
          resourceId: task.ownerId.toString(),
        }))}
        slotMinTime={"08:00:00"}
        slotMaxTime={"18:00:00"}
        expandRows={true}
      />
    </div>
  );
}
