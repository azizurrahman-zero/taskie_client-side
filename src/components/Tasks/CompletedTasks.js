import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import NoItems from "../Shared/NoItems";
import EditTaskModal from "./EditTaskModal";
import Task from "./Task";

const CompletedTasks = () => {
  const [editTask, setEditTask] = useState(null);
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["tasks"], () =>
    fetch("https://taskie-l5hw.onrender.com/completed-tasks").then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-white rounded-xl p-10 my-5 lg:mx-0 mx-5">
      <h2 className="lg:mb-6 mb-1 lg:mt-0 mt-5 font-bold text-neutral text-center lg:text-5xl text-3xl tracking-widest uppercase">
        Completed Tasks
      </h2>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto w-full rounded-xl">
          <table className="table w-full">
            <tbody>
              {tasks.map((task) => (
                <Task
                  key={task._id}
                  task={task}
                  refetch={refetch}
                  undo
                  setEditTask={setEditTask}
                ></Task>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoItems />
      )}
      {editTask && (
        <EditTaskModal
          setEditTask={setEditTask}
          task={editTask}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default CompletedTasks;
