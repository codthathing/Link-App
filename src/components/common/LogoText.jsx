import page_logo from "../../assets/page-logo.png";

const LogoText = ({style, className}) => {
  return (
    <nav className={`flex ${className} md:p-0 items-center md:justify-center gap-x-2 md:gap-x-5 lg:gap-x-2`}>
      <img src={page_logo} className="w-7 md:w-12 lg:w-10" alt="PAGE LOGO" />
      <p className={`font-extrabold text-lg md:text-4xl lg:text-2xl ${style}`}>devlinks</p>
    </nav>
  );
};

export default LogoText;