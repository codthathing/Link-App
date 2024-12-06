import { useNavigate } from "react-router-dom";

const SignInOption = ({mainText, linkText, linkTo}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-x-1 gap-y-[0.15px] text-xs md:text-base items-center">
      <p className="text-grey-normal">{mainText}</p>
      <span className="text-customPurple cursor-pointer" onClick={() => navigate(linkTo)}>{linkText}</span>
    </div>
  );
};

export default SignInOption;