"use client";
import React from "react";
import { useUserInfoContext } from "@/context/userinfoContext";

const Navbar = () => {
  const { userInfo } = useUserInfoContext();
  const isLoggedIn = Object.keys(userInfo).length > 0;

  return (
    <nav className="bg-[#f2f2f2] shadow-md py-3 md:px-7 px-5 flex justify-between">
      <div className="flex items-center gap-5">
        <img src="/assets/tea logo.png" alt="logo" width={30} />
        <h1 className="font-kaushanScript text-xl mt-2 font-bold hidden md:block">Get me a tea</h1>
      </div>

      <ul className={`flex gap-5 items-center`}>
        <a href={isLoggedIn ? '/dashboard' : '/login'}>
          <li className="font-semibold text-md md:text-lg">Login</li>
        </a>
        <a href="/signup">
          <li className="font-semibold bg-elementColor text-white text-md md:text-lg py-2 px-5 rounded-full">Sign up</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
