import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#DAE7EF] h-[100vh] flex justify-center items-center flex-col font-poppins">
      <div className="text-[200px] stroke">404</div>
      <div className="text-2xl mt-[-55px] mb-4 font-semibold">
        The page you are looking for not found
      </div>
      <a href="/" className="border-2">
        Go to home
      </a>
    </div>
  );
};

export default NotFound;
