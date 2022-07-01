import React, { useState } from "react";
import { useQuery } from "react-query";
import AddTask from "./AddTask";
import Loading from "../Shared/Loading";
import Task from "./Task";
import EditTaskModal from "./EditTaskModal";

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
    <div className="bg-white rounded-xl p-10">
      <h2 className="mb-6 font-bold text-neutral text-center text-5xl tracking-widest uppercase">
        Tasks
      </h2>
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
