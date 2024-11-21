import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { Plus } from "lucide-react";

const Gallery = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-[80vw] bg-[#DAE7EF] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto pb-10">
        <Header />

        <section className="w-[65%] flex flex-col gap-7 mt-[13rem]">
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl">Gallery</h2>
            <button className="flex items-center justify-center px-5 py-3 rounded-full bg-elementColor text-white font-semibold">
              <Plus /> Add Image
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
