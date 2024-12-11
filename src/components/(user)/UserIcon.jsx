const UserIcon = ({ srcOne, srcTwo, alt, page, type, buttonFunction, text, className, style = "hidden" }) => {
  return (
    <span onClick={buttonFunction} className={`px-3 py-1 md:py-2.5 md:px-7 lg:px-5 lg:py-1.5 rounded-md md:flex md:items-center cursor-pointer md:gap-x-2 lg:gap-x-1 ${className} transition ease-linear duration-200 ${type === "VIEW" ? "hover:bg-purple-light" : ""} ${page === type ? "bg-purple-light" : ""} ${type === "SHARE" ? "bg-purple-custom" : ""} ${type === "VIEW" ? "border border-purple-custom" : ""}`}>
      {(srcOne || srcTwo) && <img src={page === type || type === "VIEW" ? srcOne : srcTwo} className="w-5 md:w-8 lg:w-5" alt={alt} />}
      <span className={`${(page === type || type === "VIEW") ? "text-purple-custom" : "text-grey-normal"} ${type === "SHARE" ? "text-white" : ""} ${style} text-center md:block text-base md:text-2xl lg:text-base`}>{text}</span>
    </span>
  );
};

export default UserIcon;