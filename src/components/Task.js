import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const Task = ({ task, refetch }) => {
  const { _id, name, details, time } = task;

  const [editTask, setEditTask] = useState(null);

  return (
    <>
      <tr className="bg-[#E5E5E5]">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="font-bold">
              {name}
              <span className="badge font-normal ml-3 badge-ghost badge-sm">
                {time}
              </span>
            </div>
          </div>
        </td>
        <td>{details}</td>
        <th>
          <label
            onClick={() => setEditTask(_id)}
            htmlFor="edit-task-modal"
            className="btn modal-button text-white"
          >
            <FontAwesomeIcon className="text-xl" icon={faPenToSquare} />
          </label>
        </th>
      </tr>
      {editTask && (
        <EditTaskModal
          setEditTask={setEditTask}
          task={task}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default Task;
