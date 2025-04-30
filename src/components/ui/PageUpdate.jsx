import { useContext, useEffect } from "react";
import { NavigateContext } from "../../services/NavigateProvider";

const PageUpdate = () => {
  const { updateDetails: { text, error }, setUpdateDetails } = useContext(NavigateContext);

  useEffect(() => {
    const timeout = setTimeout(() => setUpdateDetails({ text: "", error: false }), 5000);

    return () => clearTimeout(timeout);
  }, [text, error]);
  
  if (text) {
    return <p className={`absolute right-6 top-8 md:h-fit md:right-6 md:top-6 lg:right-4 lg:top-4 p-3 md:p-6 lg:p-4 w-64 md:w-2/4 lg:w-96 bg-gray-light md:bg-white ${error ? "text-red-500" : "text-green-500"} rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl text-[8px] md:text-xl lg:text-base`}>{text}</p>;
  };
};

export default PageUpdate;