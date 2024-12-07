const UserIcon = ({src, alt, page, type, buttonFunction}) => {
  return <span onClick={buttonFunction} className={`px-3 py-1 rounded-md ${page === type ? "bg-purple-light" : ""} ${type === "VIEW" ? "border border-purple-custom" : ""}`}><img src={src} className="w-5 md:w-12 lg:w-10" alt={alt} /></span>
};

export default UserIcon;