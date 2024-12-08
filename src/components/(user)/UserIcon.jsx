const UserIcon = ({ srcOne, srcTwo, alt, page, type, buttonFunction, text }) => {
  return (
    <span onClick={buttonFunction} className={`px-3 py-1 md:py-2.5 md:px-7 lg:px-5 lg:py-1.5 rounded-md md:flex md:items-center cursor-pointer md:gap-x-2 lg:gap-x-1 transition ease-linear duration-200 ${type === "VIEW" ? "hover:bg-purple-light" : ""} ${page === type ? "bg-purple-light" : ""} ${type === "VIEW" ? "border border-purple-custom" : ""}`}>
      <img src={page === type || type === "VIEW" ? srcOne : srcTwo} className="w-5 md:w-8 lg:w-5" alt={alt} />
      <span className={`${page === type ? "text-purple-custom" : "text-grey-normal"} hidden md:block md:text-2xl lg:text-base`}>{text}</span>
    </span>
  );
};

export default UserIcon;