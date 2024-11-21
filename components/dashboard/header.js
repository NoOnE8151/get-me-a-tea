"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header = ({ style }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const handleNavbar = () => {
    if(isNavbarActive) {
      setIsNavbarActive(false);
    } else setIsNavbarActive(true);
  }
  
  return (
    <>
      <header className="sticky top-0 right-0 h-[4rem] w-[100vw] mb-10">
          <div className={`bg-[#DAE7EF] h-full flex items-center justify-end w-[90vw] overflow-hidden py-10 pr-4 cursor-pointer ${style}`}
          >
        <div className="flex items-center w-[5.5rem] bg-[#f2f2f2] py-3 px-3 rounded-full gap-2 border-2 border-gray-400" onClick={handleNavbar}>
          <Menu />
          <img
            src="/assets/pfp.jpg"
            alt="pfp"
            width={30}
            className="rounded-full"
            />
        </div>
        </div>
        <div className="flex justify-end w-[85vw]">
        <ul className={`bg-[#f2f2f2] py-4 shadow-xl px-2 right-10 rounded-lg w-[20%] navbar ${isNavbarActive ? 'navbarActive' : ''}`}
        onClick={handleNavbar}>
          <li className="hover:bg-gray-200 py-2 pr-28 px-3 rounded-lg"><b>View my page</b></li>
          <li className="hover:bg-gray-200 py-2 pr-28 px-3 rounded-lg"><b>Dashboard</b></li>
          <li className="hover:bg-gray-200 py-2 pr-28 px-3 rounded-lg">My account</li>
          <li className="hover:bg-gray-200 py-2 pr-28 px-3 rounded-lg">Logout</li>
        </ul>
          </div>
      </header>
    </>
  );
};

export default Header;
