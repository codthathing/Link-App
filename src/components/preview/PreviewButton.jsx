const PreviewButton = ({buttonFunction, changeColor}) => {
  return (
    <span onClick={buttonFunction} className={`px-3 py-1 md:py-2.5 md:px-7 lg:px-5 lg:py-1.5 rounded-md md:flex md:items-center cursor-pointer md:gap-x-2 lg:gap-x-1 w-full md:w-fit ${changeColor ? "bg-purple-custom hover:bg-purple-hover hover:shadow-all-sides hover:shadow-purple-light" : "border border-purple-custom bg-transparent hover:bg-purple-light"} transition-all ease-linear duration-200`}>
      <span className={`${changeColor ? "text-white" : "text-purple-custom"} text-center md:block text-base md:text-2xl lg:text-base`}>Share Link</span>
    </span>
  );
}; 

export default PreviewButton;