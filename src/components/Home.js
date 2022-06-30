import React from "react";
import Navbar from "./Shared/Navbar";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <div className="lg:px-10 bg-[#E5E5E5]">
      <Navbar />
      <Tasks />
    </div>
  );
};

export default Home;
