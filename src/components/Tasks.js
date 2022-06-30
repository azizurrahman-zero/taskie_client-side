import React from "react";
import { useQuery } from "react-query";
import AddTask from "./AddTask";
import Loading from "./Shared/Loading";
import Task from "./Task";

const Tasks = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["orders"], () =>
    fetch("http://localhost:5000/tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-10">
      <h1 className="text-5xl pb-4 text-center uppercase font-bold text-[#6C5DD3]">
        Tasks
      </h1>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full mb-40">
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
