import React from "react";

const Card = ({ pfp, text, supportersCount, style }) => {
  return (
    <div className={`flex flex-col gap-3 items-center bg-secondaryBackgroundColor shadow-md w-[15rem] py-3 px-5 rounded-3xl text-center relative  ${style}`}>
      <img src={pfp} alt="pfp" className="rounded-full w-[4rem]" />
      <p>{text}</p>
      <span>{supportersCount}&nbsp;supporters</span>
    </div>
  );
};

export default Card;
