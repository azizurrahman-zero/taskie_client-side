import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero lg:h-96 h-full lg:py-0 py-20">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="lg:text-5xl text-2xl font-bold text-[#000000cc]">
            Stay organized and connected
          </h1>
          <p className="lg:py-6 py-4 pb-8 lg:px-20 text-[#000000cc] lg:text-xl">
            Organize and assign tasks. With lists, teams see immediately what
            they need to do, which tasks are a priority, and when work is due.
          </p>
          <button className="btn">
            <Link to="/">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
