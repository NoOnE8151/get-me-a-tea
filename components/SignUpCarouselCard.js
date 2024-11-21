import React from "react";

const SignUpCarouselCard = ({ title, description, img, alt, style }) => {
  return (
    <>
      <div className="bg-[#DBE5EB] py-11 rounded-2xl text-center flex flex-col items-center signupCarouselItem1">
        <h2 className="px-5 pb-3 font-bold text-2xl">Support</h2>
        <p className="px-5 text-md font-semibold">
          Give Your Supporters a Simple Way to Show Appreciation.
        </p>
        <img src="assets/tea card.png" alt="support" className="mt-5" />
      </div>

      <div className="bg-[#DBE5EB] py-11 rounded-2xl text-center flex flex-col items-center signupCarouselItem2">
        <h2 className="px-5 pb-3 font-bold text-2xl">Membership</h2>
        <p className="px-5 text-md font-semibold">
        Start a membership for your most loyal supporters.
        </p>
        <img src="assets/membership card for small screens.png" alt="support" className="mt-16 w-[330px]" />
      </div>

      <div className="bg-[#DBE5EB] py-11 rounded-2xl text-center flex flex-col items-center signupCarouselItem3">
        <h2 className="px-5 pb-3 font-bold text-2xl">Shop</h2>
        <p className="px-5 text-md font-semibold">
        Introducing Market, the creative way to sell.
        </p>
        <img src="assets/shop card.png" alt="support" className="w-[250px] ml-4 mt-10" />
      </div>
    </>
  );
};

export default SignUpCarouselCard;
