import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const CalendarComponent = () => {
  const { data: tasks, isLoading } = useQuery(["tasks"], () =>
    fetch("https://taskie-l5hw.onrender.com/tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-white rounded-xl lg:p-10 p-5 my-5 lg:mx-0 mx-5">
      <h2 className="lg:mb-6 mb-4 lg:mt-0 mt-5 font-bold text-neutral text-center lg:text-5xl text-3xl tracking-widest uppercase">
        Calendar
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={tasks}
      />
    </div>
  );
};

export default CalendarComponent;
