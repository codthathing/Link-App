const ProfileInput = ({ label, type, name, placeholder, value, onChange, errorMessage }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <label htmlFor="profile-firstname" className="text-xs md:text-xl lg:text-base mb-[0.15px] md:mb-1.5 lg:mb-1 text-grey-normal">{label}</label>
      <div className={`flex items-center gap-x-2 text-[8px] md:text-base py-1 px-3 md:px-5 md:py-2 lg:py-1 bg-white w-full md:w-2/4 border ${errorMessage ? "border-customRed" : "border-grey-semilight"} ${errorMessage ? "" : "hover:border-purple-custom hover:shadow-all-sides hover:shadow-purple-light"} transition-all ease-linear duration-200 rounded-md`}>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} id="profile-firstname" className={`text-grey-dark w-full outline-none shadow-inset shadow-white py-2 md:py-2.5`} />
        <span className=" text-customRed justify-self-end whitespace-nowrap">{errorMessage}</span>
      </div>
    </div>
  );
};

export default ProfileInput;