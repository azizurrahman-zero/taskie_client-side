import React from "react";

const Task = ({ task }) => {
  const { name, details, time } = task;

  return (
    <>
      <tr className="bg-[#E5E5E5]">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="font-bold">
              {name}
              <span class="badge font-normal ml-3 badge-ghost badge-sm">
                {time}
              </span>
            </div>
          </div>
        </td>
        <td>{details}</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default Task;
