"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { Heart, Coins, HandCoins } from "lucide-react";
import { useUserInfoContext } from "@/context/userinfoContext";
import MobileNavbar from "@/components/dashboard/mobileNavbar";

const Supporters = () => {
  const { userInfo } = useUserInfoContext();
  return (
    <div className="flex">
      <Sidebar />
      <MobileNavbar />

      <main className="bg-[#DAE7EF] w-[100vw] md:w-[80vw] h-[100vh] flex flex-col items-center md:justify-center md:gap-7 overflow-auto md:pb-10 pb-20">
        <Header />


        <section className="md:w-[65%] w-[90%] flex flex-col md:gap-7 gap-4 md:mt-0 mt-[7rem]">
          <h2 className="text-xl md:text-2xl font-semibold">Supporters</h2>

          <div className="bg-[#f2f2f2] px-8 py-10 rounded-xl">

              <div className="flex md:justify-between md:flex-row flex-col gap-7 capitalize">

                <div className="bg-gray-200 md:w-1/3 rounded-lg px-5 py-4 flex flex-col md:items-start items-center gap-4">
                  <div className="text-3xl font-bold">{userInfo.supportersCount}</div>

                  <div className="flex items-center gap-3 text-xl text-secondaryTextColor">
                <Heart size={20} /> <span>supporters</span>
                  </div>

                </div>

                <div className="bg-gray-200 md:w-1/3 rounded-lg px-5 py-4 flex flex-col md:items-start items-center gap-4">
                <div className="text-3xl font-bold">$0</div>

                  <div className="flex items-center gap-3 text-xl text-secondaryTextColor">
                  <Coins /> <span>last 30 days</span>
                  </div>
                </div>

                <div className="bg-gray-200 md:w-1/3 rounded-lg px-5 py-4 flex flex-col md:items-start items-center gap-4">
                <div className="text-3xl font-bold">${userInfo.earningsFromSupporters}</div>

                  <div className="flex items-center gap-3 text-xl text-secondaryTextColor">
                  <HandCoins /> <span>all time</span>
                  </div>
                </div>

              </div>

              <hr className="outline-none border-1 border-gray-200 my-10" />

              <div className="bg-[#F2F2F2] w-full py-10 md:px-10 px-5 flex flex-col justify-center items-center gap-5 pb-[5rem] border-2 border-gray-200">
          <div className="bg-[#e0e0e0] p-4 rounded-full flex justify-center items-center w-[3.9rem]"><Heart size={30} /></div>
          <div className="text-center">
          <div className="text-lg md:text-xl font-semibold">You don't have any supporters yet.</div>
          <div className="text-lg md:text-xl"> Share page to your audience to get started.</div>
          </div>
        </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Supporters;
