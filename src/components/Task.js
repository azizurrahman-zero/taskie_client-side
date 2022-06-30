import React from "react";

const Task = ({ task }) => {
  const { name, details, time } = task;

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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default Task;
