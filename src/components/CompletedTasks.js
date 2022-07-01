import React from "react";
import { useQuery } from "react-query";
import Loading from "./Shared/Loading";
import Task from "./Task";

const CompletedTasks = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["tasks"], () =>
    fetch("http://localhost:5000/completed-tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-10">
      <h2 className="mb-6 font-bold text-neutral text-4xl tracking-widest uppercase">
        Completed Tasks
      </h2>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full mb-20">
          <tbody>
            {tasks.map((task) => (
              <Task key={task._id} task={task} refetch={refetch} undo></Task>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTasks;
