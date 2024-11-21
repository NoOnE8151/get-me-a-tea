import React from "react";

const SectionHeader = ({ header }) => {
  return (
    <div className="flex items-center justify-center">
        <div className="bg-secondaryTextColor h-px w-[80%]"></div>
      <h4 className="absolute bg-backgroundColor text-xl md:text-2xl font-semibold px-5 md:px-10">{header}</h4>
    </div>
  );
};

export default SectionHeader;
