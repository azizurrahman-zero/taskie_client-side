import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTask = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const newTask = {
      name: name,
    };

    // send data to server
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${name} successfully added.`);
        reset();
      });
  };
  return (
    <div className="fixed bottom-0 pt-5 pb-10 pr-20 bg-[#E5E5E5] z-50 w-full flex flex-col items-center gap-3">
      <h1 className="text-5xl uppercase font-bold text-[#6C5DD3]">Add Task</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Write task and press enter.."
            className="input input-bordered w-96"
            {...register("name", {
              required: {
                value: true,
                message: "*Please enter a task name to add",
              },
            })}
          />
          <label className="label py-0">
            {errors.name && (
              <span className="label-text-alt text-error absolute bottom-5">
                {errors.name.message}
              </span>
            )}
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
