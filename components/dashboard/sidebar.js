"use client";
import React from "react";
import {
  House,
  ExternalLink,
  Images,
  MessageCircle,
  ChevronLeft,
  ChevronDown,
  Pencil,
  Heart,
  LockKeyhole,
  ShoppingBag,
  Paperclip  
} from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

const Sidebar = () => {
    //state that triggers the icon of drop down
  const [isDropdownActive, setIsDropDownActive] = useState(false);

  //function to toggle dropdown
  const handleDropdownToggle = () => {
    if (isDropdownActive) {
      setIsDropDownActive(false);
    } else setIsDropDownActive(true);
  };

  //highlighting active navigation link

  return (
    <aside className="w-[20vw] h-[100vh] bg-[#F2F2F2] md:block hidden">
      <header className="flex items-center justify-center gap-5 py-2 bg-white shadow-lg ml-[-50px]">
        <img src="/assets/tea logo with outline.png" alt="logo" width={40} />
        <h1 className="relative top-1 font-kaushanScript text-xl font-bold">
          get me a tea
        </h1>
      </header>

      <nav className="text-2xl font-semibold capitalize pl-3 pt-8">
        <ul className="flex flex-col gap-3">
          <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
          <Link href="/dashboard" className="flex items-center gap-3">
            <House size={30} /> Home
            </Link>
          </li>
          <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
          <a href="/user" target="_blank" className="flex items-center gap-3">
            <ExternalLink size={30} /> view page
            </a>
          </li>
        </ul>
        <h2 className="text-xl text-secondaryTextColor mt-6 p-2 px-7">
          monetize
        </h2>

        <ul className="flex flex-col gap-3">
          <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
            {" "}
            <Link href="/dashboard/supporters" className="flex items-center gap-3">
            <Heart size={30} /> suppoters
            </Link>
          </li>
          <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
            {" "}
            <Link href="/dashboard/membership" className="flex items-center gap-3">
            <LockKeyhole size={30} /> membership
            </Link>
          </li>
          <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
            {" "}
            <Link href="/dashboard/shop" className="flex items-center gap-3">
            <ShoppingBag size={30} /> shop
            </Link>
          </li>

          <li
            onClick={handleDropdownToggle}
            className="flex gap-3 items-center justify-between pr-10 p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl"
          >
            {" "}
            <span className="flex gap-3">
              <Pencil size={30} />
              publish{" "}
            </span>{" "}
            <span className={`${isDropdownActive ? "" : "hidden"}`}>
              <ChevronLeft size={28} />
            </span>{" "}
            <span className={`${isDropdownActive ? "hidden" : ""}`}>
              <ChevronDown size={28} />
            </span>
          </li>

          <div
            className={`dropDownList ${
              isDropdownActive ? "dropDownListActive" : ""
            }`}
          >
            <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
              <Link href="/dashboard/posts" className="flex items-center gap-3">
              <Paperclip size={30} />
              posts
              </Link>
            </li>
            <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
              <Link href="/dashboard/gallery" className="flex items-center gap-3">
              <Images size={30} />
              gallery
              </Link>
            </li>
            <li className="p-2 px-7 hover:bg-[#e0e0e0] hover:rounded-2xl">
              <Link href="/dashboard/messages" className="flex items-center gap-3">
              <MessageCircle size={30} />
              messages
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
