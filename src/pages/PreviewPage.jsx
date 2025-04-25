import { useContext, useState, createContext, useEffect } from "react";
import PageDiv from "../components/ui/PageDiv";
import UserIcon from "../components/(user)/UserIcon";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/(user)/UserProfile";
import PageNotification from "../components/common/PageNotification";
import { NavigateContext } from "../services/NavigateProvider";
import PreviewButton from "../components/preview/PreviewButton";
import copy from "copy-to-clipboard";

export const PreviewContext = createContext();
const PreviewPage = () => {
  const { linkEmail, setLinkEmail } = useContext(NavigateContext);

  const navigate = useNavigate();

  useEffect(() => {
    setLinkEmail("");
  }, []);

  const [linkMessage, setLinkMessage] = useState("");

  const copyLinkToClipBoard = () => {
    if (linkEmail) {
      copy(linkEmail);
      setLinkMessage("The link has been copied to your clipboard!");
      setTimeout(() => {
        setLinkEmail("");
        setLinkMessage("");
      }, 2000);
    };
  };

  return (
    <PageDiv className={"relative"}>
      <div className="hidden md:block absolute top-0 bg-purple-custom w-full h-[35%] rounded-bl-3xl rounded-br-3xl"></div>
      <section className="w-full h-full flex flex-col gap-y-4 md:gap-y-7 lg:gap-y-4 md:p-7 lg:p-4">
        <header className="p-4 md:p-6 lg:p-4 flex md:justify-between items-center gap-x-3 md:bg-white md:rounded-md z-10">
          <UserIcon buttonFunction={() => navigate("/user-page")} type={"VIEW"} text={"Back to Editor"} style="block" className={"w-full md:w-fit"} />
          <PreviewButton buttonFunction={copyLinkToClipBoard} changeColor={linkEmail} />
        </header>
        <div className="flex items-center justify-center flex-1 z-10 md:pb-8">
          <UserProfile divFunction={true} className={"md:bg-white shadow-md rounded-2xl py-14 md:py-20 lg:py-10 px-4 md:px-12 lg:px-8 w-3/5 md:w-2/5 lg:w-1/5"} border={true} />
        </div>
      </section>
      <PageNotification type={"LINK"} notisMessage={linkMessage} />
    </PageDiv>
  );
};

export default PreviewPage;