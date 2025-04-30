import { useContext, useState, useEffect } from "react";
import { NavigateContext } from "../../services/NavigateProvider";
import phone_placeholder_icon from "../../assets/phone-placeholder-icon.png";
import link_black_icon from "../../assets/link-black-icon.png";
import UserLinkTemplate from "./UserLinkTemplate";

const UserProfile = ({ backgroundImage, className, border, divFunction }) => {
  const { user: { links, details } } = useContext(NavigateContext);

  const [linksArray, setLinksArray] = useState([]);
  useEffect(() => {
    setLinksArray(links.concat(Array(5 - links.length).fill({ iconValueTwo: link_black_icon, platformValue: "Empty", linkValue: "", empty: true })));
  }, [links]);

  return (
    <div {...(backgroundImage && { style: { backgroundImage: `url(${phone_placeholder_icon})` }, })} className={`relative bg-contain bg-no-repeat bg-center flex flex-col gap-y-3 md:gap-y-10 lg:gap-y-8 items-center justify-center ${className}`}>
      <div style={{ ...(details.image_url && { backgroundImage: `url(${details.image_url})` }) }} className={`w-20 h-20 md:w-32 md:h-32 lg:h-24 lg:w-24 ${details.image_url ? "bg-cover bg-no-repeat border border-purple-custom" : "bg-grey-deep"} ${border ? "border-l-purple-custom" : ""} rounded-full`}></div>
      <div className={`flex flex-col items-center ${(details.first_name || details.last_name || details.email) ? "" : "gap-y-2"} text-center w-full`}>
        <p className={`${(details.first_name || details.last_name) ? "text-xs md:text-2xl lg:text-base w-full" : "bg-grey-deep w-32 h-2.5 rounded-3xl"}`}>{(details.first_name || details.last_name) ? details.first_name + " " + details.last_name : ""}</p>
        <p className={`${details.email ? "text-[8px] md:text-base lg:text-xs w-full break-all" : "bg-grey-deep w-20 h-1.5 rounded-3xl"}`}>{details.email ? details.email : ""}</p>
      </div>
      <UserLinkTemplate linkArray={linksArray} divFunction={divFunction} />
    </div>
  );
};

export default UserProfile;