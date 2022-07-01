import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer py-10 lg:w-11/12 mx-auto">
        <div className="flex flex-col lg:order-first order-last w-full mx-auto items-center lg:items-start">
          <Link to="/" className="flex gap-2">
            <img src={logo} alt="logo" />
            <span className="font-extrabold text-4xl">Taskie</span>
          </Link>
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-medium text-xs">
              Copyright © 2022 - All right reserved
            </p>
            <div className="gap-5 flex flex-row mt-3">
              <Link
                to={{
                  pathname: "//twitter.com/exelcomputersys",
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link
                to={{
                  pathname: "//www.youtube.com/user/exelerpsoftware",
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link
                to={{
                  pathname:
                    "//www.facebook.com/Exel-Computer-Systems-plc-284360161881/",
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto justify-items-center lg:justify-items-start">
          <span className="footer-title">Get in Touch</span>
          <p className="text-base font-medium text-center lg:text-left">
            Moonshine St. 14/05 Light City,
            <br />
            London, United Kingdom
          </p>
          <p className="text-base font-medium text-center lg:text-left">
            admin@taskie.com
            <br />
            00 (123) 456 78 90
          </p>
        </div>
        <div className="w-full mx-auto justify-items-center lg:justify-items-start">
          <span className="footer-title">Pages</span>
          <Link to="/">
            <button className="btn-link text-base text-black font-medium">
              To-do
            </button>
          </Link>
          <Link to="/completed-tasks">
            <button className="btn-link text-base text-black font-medium">
              Completed Tasks
            </button>
          </Link>
          <Link to="/calendar">
            <button className="btn-link text-base text-black font-medium">
              Calendar
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
