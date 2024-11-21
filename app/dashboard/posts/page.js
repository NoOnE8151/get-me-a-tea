import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { SquarePen, Image, Headphones, Vote } from "lucide-react"

const Posts = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-[80vw] bg-[#DAE7EF] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto pb-10">
        <Header />

        <section className="w-[65%] flex flex-col gap-7">
            <h2 className="text-2xl font-semibold">Create a new post</h2>

            <div className="capitalize w-full flex items-center justify-center gap-5">
                <div className="bg-[#f2f2f2] px-5 py-8 gap-3 shadow-sm rounded-xl w-1/4 flex flex-col items-center"><SquarePen /> Post</div>
                <div className="bg-[#f2f2f2] px-5 py-8 gap-3 shadow-sm rounded-xl w-1/4 flex flex-col items-center"><Image />album</div>
                <div className="bg-[#f2f2f2] px-5 py-8 gap-3 shadow-sm rounded-xl w-1/4 flex flex-col items-center"><Headphones />audio</div>
                <div className="bg-[#f2f2f2] px-5 py-8 gap-3 shadow-sm rounded-xl w-1/4 flex flex-col items-center"><Vote />poll</div>
            </div>

        </section>

      </main>
    </div>
  );
};

export default Posts;
