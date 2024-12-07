const PageButton = ({buttonFunction}) => {
  return <button type="button" onClick={buttonFunction} className="w-full bg-purple-custom text-white outline-none hover:bg-purple-hover hover:shadow-all-sides hover:shadow-purple-light transition ease-linear duration-200 py-3 md:py-5 mb-3 md:mb-8 text-xs md:text-base rounded-md">Login</button>
};

export default PageButton;