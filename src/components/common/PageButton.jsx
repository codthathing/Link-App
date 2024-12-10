const PageButton = ({buttonFunction, buttonText, style, hoverColor = "hover:bg-purple-hover", hoverShadow = true}) => {
  return <button type="button" onClick={buttonFunction} className={`w-full outline-none ${hoverColor} ${hoverShadow ? "hover:shadow-all-sides hover:shadow-purple-light" : ""} transition ease-linear duration-200 py-3 md:py-5 lg:py-3 mb-3 md:mb-8 text-xs md:text-2xl lg:text-xl rounded-md cursor-pointer ${style}`}>{buttonText}</button>
};

export default PageButton;