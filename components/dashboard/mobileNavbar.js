import React, { useState } from "react";
import Link from "next/link";
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
  Paperclip,
  Menu,
  X,
} from "lucide-react";

const MobileNavbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const handleDropdownToggle = () => setIsDropdownActive((prev) => !prev);
  const handleNavbarTrigger = () => setIsNavbarActive((prev) => !prev);

  return (
    <>
      {/* Header */}
        <header className="fixed top-0 left-0 right-0 w-[90vw] py-2 md:hidden bg-[#DAE7EF]">
          <div
            className="w-full flex justify-between items-center px-5 py-1 bg-[#f2f2f2] my-2 mx-4 rounded-full"
            onClick={handleNavbarTrigger}
          >
            <img src="/assets/tea logo.png" alt="logo" width={30} />
            <div className="flex items-center bg-[#f2f2f2] py-1 px-2 rounded-full gap-2 border-2 border-gray-400 w-[5rem]">
              <Menu size={20} />
              <img
                src="/assets/pfp.jpg"
                alt="pfp"
                width={30}
                className="rounded-full"
              />
            </div>
          </div>
        </header>

      {/* Navbar */}
        <nav className={`fixed bg-[#f2f2f2] top-0 w-full h-full px-7 py-5 flex-col gap-7 flex mobileNavbar ${isNavbarActive ? 'mobileNavbarActive' : ''}`}>
          <div className="flex items-center justify-between">
            <img
              src="/assets/tea logo.png"
              alt="logo"
              width={45}
              className="ml-3"
            />
            <span
              className="active:bg-gray-300 px-5 py-3 rounded-full transition-colors"
              onClick={handleNavbarTrigger}
            >
              <X />
            </span>
          </div>

          <ul className="flex flex-col gap-3 text-lg">
            <Link href="/dashboard" className="flex items-center gap-3">
              <House />
              Home
            </Link>
            <Link href="#" className="flex items-center gap-3 font-semibold">
              <ExternalLink /> View page
            </Link>
          </ul>

          <h2 className="font-poppins text-gray-500 text-xl mt-[-10px]">
            Monetize
          </h2>
          <ul className="mt-[-10px] flex flex-col gap-3 text-lg capitalize mb-[-50px]">
            <Link
              href="/dashboard/supporters"
              className="flex items-center gap-3"
            >
              <Heart />
              Support
            </Link>
            <Link
              href="/dashboard/membership"
              className="flex items-center gap-3"
            >
              <LockKeyhole />
              Membership
            </Link>
            <Link href="/dashboard/shop" className="flex items-center gap-3">
              <ShoppingBag />
              Shop
            </Link>

            <li
              onClick={handleDropdownToggle}
              className="flex gap-3 items-center justify-between pr-5"
            >
              <span className="flex gap-3">
                <Pencil />
                publish
              </span>
              <span className={`${isDropdownActive ? "" : "hidden"}`}>
                <ChevronLeft />
              </span>
              <span className={`${isDropdownActive ? "hidden" : ""}`}>
                <ChevronDown />
              </span>
            </li>

            {isDropdownActive && (
              <div className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/dashboard/posts"
                    className="flex items-center gap-3"
                  >
                    <Paperclip />
                    posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/gallery"
                    className="flex items-center gap-3"
                  >
                    <Images />
                    gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center gap-3"
                  >
                    <MessageCircle />
                    messages
                  </Link>
                </li>
              </div>
            )}
          </ul>

          <h2 className="font-poppins text-gray-500 text-xl mt-[25px]">
            More
          </h2>
          <ul className="mt-[-10px] flex flex-col gap-3 text-lg capitalize">
            <li className="flex items-center gap-3">My Account</li>
            <li className="flex items-center gap-3">Logout</li>
          </ul>
        </nav>
    </>
  );
};

export default MobileNavbar;
