import React, { useState } from "react";
import { useQuery } from "react-query";
import AddTask from "./AddTask";
import Loading from "../Shared/Loading";
import Task from "./Task";
import EditTaskModal from "./EditTaskModal";
import NoItems from "../Shared/NoItems";

const Tasks = () => {
  const [editTask, setEditTask] = useState(null);
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
    <div className="bg-white rounded-xl lg:p-10 p-5 mx-4 lg:mx-0">
      <h2 className="lg:mb-6 mb-1 lg:mt-0 mt-5 font-bold text-neutral text-center lg:text-5xl text-3xl tracking-widest uppercase">
        Tasks
      </h2>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full mb-3">
            <tbody>
              {tasks.map((task) => (
                <Task
                  key={task._id}
                  task={task}
                  refetch={refetch}
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
      <AddTask refetch={refetch} />
    </div>
  );
};

export default Tasks;
