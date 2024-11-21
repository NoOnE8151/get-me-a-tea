import React from "react";
import { ChevronRight } from "lucide-react";

const DashboardCard = ({icon, title, desc }) => {
  return (
    <div className="bg-[#f2f2f2] rounded-[2rem] md:w-1/3 w-[85%] py-5 px-8 flex flex-col gap-3 shadow-xl">
      {icon}
      <h2 className="text-xl md:text-2xl font-semibold my-2 capitalize">{title}</h2>
      <p className="text-md md:text-lg">{desc}</p>
      
      <button className="px-5 py-3 gap-2 capitalize text-lg bg-[#DBE5EB] rounded-xl font-semibold flex items-center justify-center my-2"><ChevronRight size={28} />enable</button>
    </div>
  );
};

export default DashboardCard;
