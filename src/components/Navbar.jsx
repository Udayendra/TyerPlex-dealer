import React, { useState } from "react";
import Logo from "../img/logo.png";
import login from "../img/login.png";
import Menu from "../img/menu.png";
import Close from "../img/close.png";
import NavLinks from "./Navlinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="px-16 flex items-center justify-between w-full  shadow-md bg-white">
      <div className="flex items-center font-normal justify-around w-full">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden items-center justify-center" onClick={() => setOpen(!open)}>
            <img src={`${open ? Close : Menu}`} className="h-6"/>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden ">
          <div className="flex space-x-2">
            <img src={login} alt="Login" className="h-8" />
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded-full shadow">
              login
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          
          <NavLinks />
          <div className="py-5">
            <div className="flex space-x-2">
              <img src={login} alt="Login" className="h-8" />
              <button class="bg-white md:hidden hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded-full shadow">
                login
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
