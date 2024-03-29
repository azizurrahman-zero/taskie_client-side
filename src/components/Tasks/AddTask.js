import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { format } from "date-fns";

const AddTask = ({ refetch }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const date = format(new Date(), "yyyy-MM-dd");

  const onSubmit = (data) => {
    const title = data.title;
    const newTask = {
      title: title,
      checked: false,
      date: date,
    };

    // send data to server
    fetch("https://taskie-l5hw.onrender.com/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${title} successfully added.`);
        refetch();
        reset();
      });
  };
  return (
    <div className="sticky rounded-xl bottom-0 lg:py-8 py-4 lg:pr-20 bg-[#E5E5E5] z-50 w-full flex flex-col lg:flex-row justify-center gap-6 items-center">
      <h2 className="font-bold text-neutral lg:text-4xl text-2xl tracking-widest uppercase">
        Add Tasks
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Write task name & press enter"
            className="input input-bordered lg:w-96 w-64"
            {...register("title", {
              required: {
                value: true,
                message: "*Please enter a task name to add",
              },
            })}
          />
          <label className="label py-0">
            {errors.title && (
              <span className="label-text-alt text-error absolute bottom-2.5">
                {errors.title.message}
              </span>
            )}
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
