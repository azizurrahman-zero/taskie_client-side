import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditTaskModal = ({ setEditTask, task, refetch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { _id, title, details } = task;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const taskDetails = {
      name: data.name,
      details: data.details,
      start: startDate,
      end: endDate,
    };
    fetch(`https://taskie-zero.herokuapp.com/tasks/${_id}`, {
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
          toast.success("Successfully Updated!");
          setEditTask(null);
        } else {
          toast.error("Change Information to Update");
        }
      });
  };

  const [newName, setNewName] = useState(title);
  const [newDetails, setNewDetails] = useState(details);

  return (
    <div>
      <input type="checkbox" id="edit-task-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            onClick={() => setEditTask(null)}
            className="btn btn-sm btn-ghost text-2xl absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <h3 className="tracking-widest text-[#6C5DD3] my-3 ml-1 text-xs uppercase font-bold">
            Edit Task
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label pb-0.5">
                <span className="text-xs font-medium text-neutral">
                  Task Name
                </span>
              </label>
              <input
                value={newName}
                type="text"
                placeholder="Task Name"
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium"
                {...register("name", {
                  onChange: (e) => {
                    setNewName(e.target.value);
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0.5">
                <span className="text-xs font-medium text-neutral">
                  Task Details
                </span>
              </label>
              <textarea
                value={newDetails}
                type="text"
                placeholder="Task Details"
                className="textarea focus:outline-offset-0 textarea-bordered text-base pb-0.5 font-medium"
                {...register("details", {
                  onChange: (e) => {
                    setNewDetails(e.target.value);
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label className="label pb-0.5">
                <span className="text-xs font-medium text-neutral">Start</span>
              </label>
              <DatePicker
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeSelect
                fixedHeight
              />
            </div>
            <div className="form-control">
              <label className="label pb-0.5">
                <span className="text-xs font-medium text-neutral">End</span>
              </label>
              <DatePicker
                className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium w-full"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeSelect
                fixedHeight
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn text-white" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
