import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero h-96">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-[#000000cc]">
            Stay organized and connected
          </h1>
          <p className="py-6 px-20 text-[#000000cc] text-xl">
            Organize and assign tasks. With lists, teams see immediately what
            they need to do, which tasks are a priority, and when work is due.
          </p>
          <button className="btn">
            <Link to="/log-in">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
