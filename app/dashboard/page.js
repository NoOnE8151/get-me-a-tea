"use client";
import { useUserInfoContext } from "@/context/userinfoContext";
import {
  Heart,
  LockKeyhole,
  ShoppingBag,
  Paperclip,
  Share
} from "lucide-react";
import DashboardCard from "@/components/dashboard/home/card";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import MobileNavbar from "@/components/dashboard/mobileNavbar";

const Dashboard = () => {
  const { userInfo } = useUserInfoContext();

  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <main className="bg-[#DAE7EF] w-[100vw] md:w-[80vw] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto pb-10">
<Header />
<MobileNavbar />
        <section className="bg-[#F2F2F2] md:w-[65%] w-[90%] rounded-3xl py-6 px-5 md:px-10 shadow-lg mt-[72rem] md:mt-[27rem]">

          <div className="flex items-center justify-between gap-3 md:gap-6 overflow-hidden">
            <div className="flex gap-3 md:gap-6 items-center w-[60%] overflow-auto hideScrollBar">
              <div className="bg-gray-600 rounded-full w-24 h-24 md:block hidden"></div>
              <div>
                <h4 className="text-lg md:text-2xl font-semibold">Hi, {userInfo.username}</h4>
                <a
                  className=" text-secondaryTextColor text-xs md:text-lg"
                  href="#"
                >
                  https://getmeatea.com/{userInfo.username}
                </a>
              </div>
            </div>

            <button className="bg-elementColor capitalize px-3 md:px-7 text-white font-semibold py-3 text-xs md:text-lg rounded-full flex items-center gap-1 md:gap-3">
              <Share className="md:block h-4 w-4" />
              share&nbsp;page
            </button>
          </div>

          <hr className="outline-none border-1 border-black w-[69%] my-7" />

          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl md:text-4xl capitalize">earnings:</h2>
            <div className="text-4xl font-semibold">${userInfo.totalEarnings}</div>
          </div>

          <ul className="mt-7 capitalize flex items-center gap-3 md:gap-12 w-full flex-wrap">
            <li className="flex items-center gap-3 text-xs md:text-xl"><span className="w-5 h-5 bg-[#E6BE71]"></span> <span className="font-bold">${userInfo.earningsFromSupporters}</span>&nbsp;suppoters</li>
            <li className="flex items-center gap-3 text-xs md:text-xl"><span className="w-5 h-5 bg-[#EA77D0]"></span> ${userInfo.earningsFromMembership}&nbsp;membership</li>
            <li className="flex items-center gap-3 text-xs md:text-xl"><span className="w-5 h-5 bg-[#77B3EA]"></span> {userInfo.earningsFromShop}&nbsp;shop</li>
          </ul>

        </section>

        <section className="bg-[#F2F2F2] w-[90%] md:w-[65%] rounded-3xl py-10 px-10 shadow-lg flex flex-col justify-center items-center gap-5 pb-[5rem]">
          <div className="bg-[#e0e0e0] p-4 rounded-full flex justify-center items-center w-[3.9rem]"><Heart size={30} /></div>
          <div className="text-center">
          <div className="text-lg md:text-xl font-semibold">You don't have any supporters yet.</div>
          <div className="text-lg md:text-xl"> Share page to your audience to get started.</div>
          </div>
        </section>

        <section className="w-[90%] md:w-[65%] mt-5">
          <h2 className="capitalize font-poppins font-semibold text-3xl w-full mb-10 text-center">more ways to earn</h2>

          <div className="flex md:flex-row flex-col items-center gap-8">
          <DashboardCard icon={<LockKeyhole size={28} />} title={'Membership'} desc={'Monthly membership for your biggest fans and supporters.'} />

          <DashboardCard icon={<ShoppingBag size={28} />} title={'shop'} desc={'Introducing Shop, the creative way to sell.'}  />
          <DashboardCard icon={<Paperclip size={28} />} title={'exclusive posts'} desc={'Publish your best content exclusively for your supporters and members.'}  />
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
