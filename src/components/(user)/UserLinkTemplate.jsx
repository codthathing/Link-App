import { useState } from "react";
import arrow_right_icon from "../../assets/arrow-right-icon.png";

const UserLinkTemplate = ({ linkArray }) => {
  const changeBackground = (platformValue) => {
    const platform = platformValue.toLowerCase();
    switch (platform) {
      case "github":
        return "bg-black-deep";
      case "linkedin":
        return "bg-blue-normal";
      case "facebook":
        return "bg-blue-deep";
      case "twitter":
        return "bg-blue-sky";
      case "youtube":
        return "bg-orange-deep";
      case "others":
        return "bg-grey-dark";
      case "empty":
        return "bg-grey-deep";
    }
  };

  return (
    <main className="flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-2 mt-4 md:mt-10 lg:mt-2 w-full">
      {linkArray.map(({ iconValueTwo, platformValue, linkValue, empty }, index) => {
        return (
          <div key={index} className={`${changeBackground(platformValue)} flex justify-between items-center w-full p-2 md:p-4 lg:p-2 rounded-lg`}>
            <div className="flex gap-x-2 md:gap-x-4 items-center">
              <img src={iconValueTwo} className={`w-3 md:w-6 lg:w-4 ${empty ? "invisible" : ""}`} alt={`${platformValue && platformValue.toUpperCase()} ICON`} />
              <span className={`text-[8px] md:text-xl lg:text-base ${empty ? "invisible" : ""} text-white`}>{platformValue}</span>
            </div>
            <a href={linkValue} target="_blank" className={`${empty ? "invisible" : ""} cursor-pointer`}><img src={arrow_right_icon} className="w-2 md:w-4 lg:w-2" alt="ARROW RIGHT ICON" /></a>
          </div>
        );
      })}
    </main>
  );
};

export default UserLinkTemplate;