import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to="/" className="font-medium">
          To-Do
        </Link>
      </li>
      <li>
        <Link to="/completed-tasks" className="font-medium">
          Completed Task
        </Link>
      </li>
      <li>
        <Link to="/calendar" className="font-medium">
          Calendar
        </Link>
      </li>
    </>
  );
  return (
    <div className="lg:pt-6">
      <div className="navbar bg-base-100 lg:px-10 py-5 lg:rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="flex gap-2">
            <img src={logo} alt="logo" />
            <span className="font-extrabold text-4xl">Taskie</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
