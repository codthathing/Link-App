import bars_icon from "../../assets/bars-icon.png";
import link_black_icon from "../../assets/link-black-icon.png";
import arrow_down_icon from "../../assets/arrow-down-icon.png";
import arrow_up_icon from "../../assets/arrow-up-icon.png";

const LinkTemplate = ({ id, name, iconValue, linkValue, platformValue, handleInput, placeholder, errorMessage, setErrorMessage, removeFunction, link = true, readOnly = true, inputRef, showIcon = false, showOption, setShowOption, availableLinks, changeOption }) => {
  return (
    <div className="bg-grey-light rounded-md p-4 md:p-6">
      <div className="flex justify-between items-center mb-3 md:mb-6 lg:mb-4">
        <main className="flex items-center gap-x-2 md:gap-x-4">
          <img src={bars_icon} alt="BARS ICON" className="w-3 md:w-6 lg:w-4" />
          <p className="text-xs md:text-2xl lg:text-xl text-grey-normal font-bold">Link #{id + 1}</p>
        </main>
        <span onClick={removeFunction} className="text-xs md:text-2xl lg:text-xl text-grey-normal cursor-pointer">Remove</span>
      </div>
      <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-3">
        <main className="relative">
          <p className="mb-[0.15px] md:mb-1 text-xs md:text-xl lg:text-base text-grey-dark">Platform</p>
          <div onClick={() => setShowOption(!showOption)} className={`flex items-center py-1 px-3 md:px-5 gap-x-2 md:gap-x-4 border border-grey-semilight ${!link ? "hover:border-purple-custom hover:shadow-all-sides hover:shadow-purple-light" : ""} transition ease-linear duration-200 rounded-md ${showIcon ? "cursor-pointer" : ""}`}>
            <img src={iconValue} className="w-3 md:w-5 lg:w-4" alt="GITHUB ICON" />
            <input type="text" value={platformValue} onChange={handleInput} className={`text-[8px] md:text-lg text-grey-dark outline-none shadow-inset shadow-grey-light w-full py-2 md:py-3 ${showIcon ? "cursor-pointer" : ""}`} readOnly />
            {showIcon && <img src={showOption ? arrow_up_icon : arrow_down_icon} alt="ARROW DOWN ICON" className="justify-self-end w-3 md:w-5 lg:w-4" />}
          </div>
          {showOption && <div className="absolute flex flex-col gap-y-2 md:gap-y-6 lg:gap-y-4 bg-white z-20 w-full rounded-md mt-1 md:mt-4 lg:mt-2 p-3 md:p-6 lg:p-4">
            {availableLinks.map(({ id, platform, icon }) => {
              return (
                <main key={id} onClick={() => {
                  changeOption(id);
                  setShowOption(false);
                  setErrorMessage("");
                }} className="flex items-center gap-x-2 md:gap-x-3 cursor-pointer">
                  <img src={icon} className="w-3 md:w-5 lg:w-4" alt={`${platform.toUpperCase()} ICON`} />
                  <span className="text-xs md:text-2xl lg:text-lg">{platform}</span>
                </main>
              );
            })}
          </div>}
        </main>
        <main>
          <p className={`mb-[0.15px] md:mb-1 text-xs md:text-xl lg:text-base ${errorMessage ? "text-customRed" : "text-grey-dark"}`}>Link</p>
          <a {...(link && { href: linkValue, target: "_blank" })} onClick={(e) => { !link && e.preventDefault() }} className={`flex items-center py-1 px-3 md:px-5 gap-x-2 md:gap-x-4 border ${errorMessage ? "border-customRed" : "border-grey-semilight"} ${!errorMessage ? "hover:border-purple-custom hover:shadow-all-sides hover:shadow-purple-light" : ""} transition ease-linear duration-200 rounded-md ${link ? "cursor-pointer" : "cursor-default"}`}>
            <img src={link_black_icon} className="w-3 md:w-5 lg:w-4" alt="LINK ICON" />
            <input type="text" name={name} ref={inputRef} placeholder={placeholder} value={linkValue} onChange={handleInput} readOnly={readOnly} className={`text-[8px] md:text-base text-grey-dark outline-none shadow-inset shadow-grey-light w-full py-2 md:py-3 ${link ? "cursor-pointer" : ""}`} />
            {errorMessage && <span className="text-customRed text-[8px] md:text-base justify-self-end whitespace-nowrap">{errorMessage}</span>}
          </a>
        </main>
      </div>
    </div>
  );
};

export default LinkTemplate;