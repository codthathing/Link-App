import { useContext, useState, useEffect } from "react";
import { NavigateContext } from "../../services/NavigateProvider";
import phone_placeholder_icon from "../../assets/phone-placeholder-icon.png";
import link_black_icon from "../../assets/link-black-icon.png";
import UserLinkTemplate from "./UserLinkTemplate";

const UserProfile = ({ backgroundImage, className, border }) => {
  const { links, profileDetails } = useContext(NavigateContext);

  const [linksArray, setLinksArray] = useState([]);
  useEffect(() => {
    setLinksArray(links.concat(Array(5 - links.length).fill({ iconValueTwo: link_black_icon, platformValue: "Empty", linkValue: "", empty: true })));
  }, [links]);

  return (
    <div {...(backgroundImage && { style: { backgroundImage: `url(${phone_placeholder_icon})` }, })} className={`relative bg-contain bg-no-repeat flex flex-col gap-y-3 md:gap-y-10 lg:gap-y-8 items-center justify-center ${className}`}>
      <div style={{ ...(profileDetails.profile_picture && { backgroundImage: `url(${profileDetails.profile_picture})` }) }} className={`w-20 h-20 md:w-32 md:h-32 lg:h-24 lg:w-24 ${profileDetails.profile_picture ? "bg-cover bg-no-repeat border border-purple-custom" : "bg-grey-deep"} ${border ? "border-l-purple-custom" : ""} rounded-full`}></div>
      <div className={`flex flex-col items-center ${(profileDetails.first_name || profileDetails.last_name || profileDetails.email) ? "" : "gap-y-2"} text-center w-full`}>
        <p className={`${(profileDetails.first_name || profileDetails.last_name) ? "text-xs md:text-2xl lg:text-base w-full" : "bg-grey-deep w-32 h-2.5 rounded-3xl"}`}>{(profileDetails.first_name || profileDetails.last_name) ? profileDetails.first_name + " " + profileDetails.last_name : ""}</p>
        <p className={`${profileDetails.email ? "text-[8px] md:text-base lg:text-xs w-full break-all" : "bg-grey-deep w-20 h-1.5 rounded-3xl"}`}>{profileDetails.email ? profileDetails.email : ""}</p>
      </div>
      <UserLinkTemplate linkArray={linksArray} />
    </div>
  );
};

export default UserProfile;