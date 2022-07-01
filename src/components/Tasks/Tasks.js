import React from "react";
import { useQuery } from "react-query";
import AddTask from "./AddTask";
import Loading from "../Shared/Loading";
import Task from "./Task";

const Tasks = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["tasks"], () =>
    fetch("https://taskie-zero.herokuapp.com/tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:py-10 py-6 px-10 lg:px-0">
      <h2 className="mb-6 font-bold text-neutral text-4xl tracking-widest uppercase">
        Tasks
      </h2>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full mb-3">
          <tbody>
            {tasks.map((task) => (
              <Task key={task._id} task={task} refetch={refetch}></Task>
            ))}
          </tbody>
        </table>
      </div>
      <AddTask />
    </div>
  );
};

export default Tasks;
