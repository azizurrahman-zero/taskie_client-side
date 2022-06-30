import React from "react";
import { useQuery } from "react-query";
import Loading from "./Shared/Loading";
import Task from "./Task";

const Tasks = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["orders"], () =>
    fetch("/tasks.json", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-10">
      <h1 class="text-5xl pb-4 text-center uppercase font-bold text-[#6C5DD3]">
        Tasks
      </h1>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <tbody>
            {tasks.map((task) => (
              <Task key={task._id} task={task} refetch={refetch}></Task>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
