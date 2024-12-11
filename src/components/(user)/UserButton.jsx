import PageButton from "../common/PageButton";

const UserButton = ({buttonFunction, changeColor, className}) => {
  return (
    <div className={`${className} bottom-0 border-t border-grey-light bg-white z-10 text-end inset-x-0 px-5 pt-5 md:px-7 md:pt-7 lg:px-4 lg:mt-4"`}>
      <PageButton buttonText={"Save"} buttonFunction={buttonFunction} style={`${changeColor ? "bg-purple-custom" : "bg-purple-light"} text-white md:w-fit md:px-12`} />
    </div>
  );
};

export default UserButton;