import React from "react";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-grey-200 flex items-center justify-between p-2">
      <div className="flex items-center"></div>
      <img src={images.gericht} alt="app__logo" className="h-10" />
      <ul className="flex justify-center items-center flex-1 list-none">
        <li className="mr-1 cursor-pointer hover:text-gray-600 px-2">
          <a href="#home" className="text-blue-500 hover:text-blue-700">
            Home
          </a>
        </li>
        <li className="mr-1 cursor-pointer hover:text-gray-600 px-2">
          <a href="#about" className="text-blue-500 hover:text-blue-700">
            About
          </a>
        </li>
        <li className="mr-1 cursor-pointer hover:text-gray-600 px-2">
          <a href="#menu" className="text-blue-500 hover:text-blue-700">
            Menu
          </a>
        </li>
        <li className="mr-1 cursor-pointer hover:text-gray-600 px-2">
          <a href="#awards" className="text-blue-500 hover:text-blue-700">
            Awards
          </a>
        </li>
        <li className="mr-1 cursor-pointer hover:text-gray-600 px-2">
          <a href="#contact" className="text-blue-500 hover:text-blue-700">
            Contact
          </a>
        </li>
      </ul>
      <a className="flex flex-end center p-2 text-black " href="#login">
        Log In / Registration
      </a>
    </div>
  );
};

export default Navbar;
