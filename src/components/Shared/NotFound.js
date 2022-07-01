import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../media/not-found.svg";

const NotFound = () => {
  return (
    <div className="bg-white rounded-xl my-5">
      <img className="w-6/12 m-auto" src={notFound} alt="not found" />
      <div className="flex justify-center py-10">
        <button className="btn">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
