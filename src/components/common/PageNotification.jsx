import saved_icon from "../../assets/saved-icon.png";
import link_black_icon from "../../assets/link-black-icon.png";

const PageNotification = ({ notisMessage, type }) => {
  if (notisMessage) {
    return (
      <div className={`absolute bottom-2 md:bottom-12 lg:bottom-6 left-0 right-0 mx-auto w-fit z-50 flex items-center gap-x-1 md:gap-x-3 lg:gap-x-2 p-3 md:p-5 lg:p-4 bg-grey-dark rounded-xl`}>
        <img src={type === "SAVED" ? saved_icon : link_black_icon} className="w-3 md:w-6 lg:w-5" alt="SAVED ICON" />
        <span className="text-xs md:text-xl lg:text-base text-grey-light">{notisMessage}</span>
      </div>
    );
  };
};

export default PageNotification;