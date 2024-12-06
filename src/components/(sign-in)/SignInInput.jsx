import lock_icon from "../../assets/lock-key-fill.png";
import email_icon from "../../assets/envelope-simple-fill.png";

const SignInInput = ({label, id, type, name, value, onChange, placeholder, errorMessage}) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1 md:mb-2 text-grey-dark text-xs md:text-lg lg:text-base">{label}</label>
      <main className="border border-grey-semilight flex items-center gap-x-2 p-3 md:p-5 rounded-md md:rounded-lg">
        <img src={type === "email" ? email_icon : lock_icon} className="w-3 md:w-8 lg:w-5" alt={`${type.toUpperCase()} ICON`} />
        <input type={type} id={id} name={name} value={value} onChange={onChange} className="w-full text-grey-dark bg-transparent text-[8px] md:text-base lg:text-xs" placeholder={placeholder} />
        <span className="justify-self-end whitespace-nowrap hidden text-customRed text-[8px] md:text-base lg:text-xs">{errorMessage}</span>
      </main>
    </div>
  );
};

export default SignInInput;