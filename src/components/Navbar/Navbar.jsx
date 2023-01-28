import React from "react";

import { BiSearch } from "react-icons/bi";
import { MdNotificationImportant } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-[85vw] my-4">
      <div className="flex justify-between">
        <div className="text-3xl">
          <p> Welcome, DevOps team!</p>
        </div>
        <div className="flex justify-between">
          <div className="py-2.5">
            <BiSearch className="h-8 w-8 text-black" />
          </div>
          <input
            className="bg-gray-300 rounded-md w-full"
            placeholder="Search..."
          />
          <div className="py-2.5 mx-3">
            <MdNotificationImportant
              className="h-8 w-8 text-black rounded-full"
              viewBox="0 0 24 24"
            />
          </div>
          <div className="py-2.5">
            <FaSmileBeam className="h-8 w-8 rounded-full text-center text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
