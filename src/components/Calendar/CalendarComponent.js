import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const CalendarComponent = () => {
  const { data: tasks, isLoading } = useQuery(["tasks"], () =>
    fetch("https://taskie-zero.herokuapp.com/tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const data = [
    {
      title: "Alejandra Cortez",
      date: "2017-11-27",
    },
    {
      _id: "62bf50fa283fbfd4d5e8cf53",
      title: "Alyson Rojas",
      date: "2022-07-02",
    },
    { title: "event 1", date: "2022-07-01" },
    { title: "event 2", date: "2019-04-02" },
    {
      checked: false,
      date: "2022-07-02",
      title: "asavadvadsbadbv",
      _id: "62bf52ae6cafb07b69e75a64",
    },
  ];

  console.log(tasks);

  return (
    <div className="bg-white rounded-xl p-10 my-5">
      <h2 className="mb-7 font-bold text-neutral text-center text-5xl tracking-widest uppercase">
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
