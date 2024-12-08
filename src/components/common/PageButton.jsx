const PageButton = ({buttonFunction, buttonText, style, hoverColor = "hover:bg-purple-hover"}) => {
  return <button type="button" onClick={buttonFunction} className={`outline-none ${hoverColor} hover:shadow-all-sides hover:shadow-purple-light transition ease-linear duration-200 py-3 md:py-5 lg:py-4 mb-3 md:mb-8 text-xs md:text-2xl rounded-md cursor-pointer ${style}`}>{buttonText}</button>
};

export default PageButton;