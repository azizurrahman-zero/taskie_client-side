import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import NoItems from "../Shared/NoItems";
import Task from "./Task";

const CompletedTasks = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["tasks"], () =>
    fetch("https://taskie-zero.herokuapp.com/completed-tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-white rounded-xl p-10 my-5">
      <h2 className="mb-6 font-bold text-neutral text-center text-5xl tracking-widest uppercase">
        Completed Tasks
      </h2>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto w-full rounded-xl">
          <table className="table w-full mb-20">
            <tbody>
              {tasks.map((task) => (
                <Task key={task._id} task={task} refetch={refetch} undo></Task>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default CompletedTasks;
