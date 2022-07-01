import React from "react";
import Tasks from "../Tasks/Tasks";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="bg-[#FFC700]">
      <Banner />
      <Tasks />
    </div>
  );
};

export default Home;
