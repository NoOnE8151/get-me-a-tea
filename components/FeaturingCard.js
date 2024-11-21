import React from "react";

const FeaturingCard = ({ title, description, banner, bannerAlt, bannerStyle, smallBanner, smallBannerAlt, bannerStyleMobile }) => {
  return (
    <div className="bg-[#DBE5EB] py-4 px-5 md:py-10 md:px-20 md:text-center flex flex-col items-center rounded-xl md:rounded-3xl md:gap-10 gap-3">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="text-md md:text-2xl font-semibold text-gray-700 pb-5">{description}</p>
      <img src={banner} alt={bannerAlt} className={bannerStyle} />
      <img src={smallBanner} alt={smallBannerAlt} className={bannerStyleMobile} />
    </div>
  );
};

export default FeaturingCard;
