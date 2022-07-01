import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const Task = ({ task, refetch, undo, setEditTask }) => {
  const { _id, title, details, date, checked } = task;

  const handleChange = (id) => {
    let taskDetails;

    if (checked) {
      taskDetails = {
        checked: false,
      };
    } else {
      taskDetails = {
        checked: true,
      };
    }

    fetch(`https://taskie-zero.herokuapp.com/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskDetails),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.modifiedCount === 1) {
          refetch();
          if (undo) {
            toast.error("Task mark uncompleted!");
          } else {
            toast.success("Task completed!");
          }
        } else {
          toast.error("Error while updating");
        }
      });
  };

  return (
    <>
      <tr className="bg-[#E5E5E5]">
        <th className="pt-6">
          <label>
            <input
              value={_id}
              type="checkbox"
              className="checkbox"
              onChange={() => handleChange(_id)}
              checked={checked}
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="font-bold lg:text-lg">
              {title}
              <span className="badge font-normal ml-3 badge-ghost badge-sm">
                {date}
              </span>
            </div>
          </div>
        </td>
        <td className="lg:font-medium">{details}</td>
        <th>
          <label
            onClick={() => setEditTask(task)}
            htmlFor="edit-task-modal"
            className="btn modal-button text-white"
          >
            <FontAwesomeIcon className="text-xl" icon={faPenToSquare} />
          </label>
        </th>
      </tr>
    </>
  );
};

export default Task;
