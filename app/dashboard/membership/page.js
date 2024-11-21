"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { MoveRight } from "lucide-react"
import MobileNavbar from "@/components/dashboard/mobileNavbar";


const Membership = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MobileNavbar />

      <main className="bg-[#DAE7EF] w-[100vw] md:w-[80vw] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto pb-10">
        <Header />

        <section className="w-[90%] md:w-[65%] flex flex-col gap-7 md:mt-[17rem] mt-[35rem]">
          <h2 className="text-2xl font-semibold">Memberships</h2>

          <div className="w-full bg-[#f2f2f2] rounded-2xl py-10">

            <div className="flex flex-col gap-3 items-center pb-10">
              <h2 className="text-3xl font-semibold">Enable membership</h2>
              <div className="uppercase font-bold text-gray-300 text-xl">highly recommended</div>
              <button className="bg-elementColor text-white font-semibold flex items-center gap-3 px-5 py-3 my-5 rounded-full">Enable membership <MoveRight /></button>
            </div>

            <div>
                <div className="flex items-center md:flex-row flex-col gap-4 md:gap-8 px-6 md:px-10">
                    <img src="/assets/mem-onboard-1.png" alt="member onboard 1" width={350} />
                    
                    <div>
                        <h3 className="text-2xl font-semibold">Earn recurring income</h3>
                    <p>Memberships are a great way to build recurring revenue, create engagement, and build deep and meaningful relationships with your fans. Start earning monthly/yearly upfront payments doing what you love!</p>
                    </div>
                </div>

                <div className="flex items-center md:flex-row flex-col gap-4 md:gap-8 px-6 md:px-10">
                    <div>
                        <h3>Share exclusives</h3>
                        <p>Share exclusive posts, messages or other rewards with your members. Creators also turn on membership without rewards, only to accept monthly support.</p>
                    </div>
                    <img src="/assets/mem-onboard-2.png" alt="member onboard 2" width={350} />
                </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Membership;
