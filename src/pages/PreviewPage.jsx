import PageDiv from "../components/ui/PageDiv";
import UserIcon from "../components/(user)/UserIcon";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/(user)/UserProfile";

const PreviewPage = () => {
  const navigate = useNavigate();

  return (
    <PageDiv className={"relative"}>
      <div className="hidden md:block absolute top-0 bg-purple-custom w-screen h-[35%] rounded-bl-3xl rounded-br-3xl"></div>
      <section className="w-full h-full flex flex-col gap-y-4 md:gap-y-7 lg:gap-y-4 md:p-7 lg:p-4">
        <header className="p-4 md:p-6 lg:p-4 flex md:justify-between items-center gap-x-3 md:bg-white md:rounded-md z-10">
          <UserIcon buttonFunction={() => navigate("/user-page")} type={"VIEW"} text={"Back to Editor"} style="block" className={"w-full md:w-fit"} />
          <UserIcon buttonFunction={() => navigate("/user-page")} type={"SHARE"} text={"Share Link"} style="block" className={"hover:bg-purple-hover hover:shadow-all-sides hover:shadow-purple-light w-full md:w-fit"} />
        </header>
        <div className="flex items-center justify-center flex-1 z-10">
          <UserProfile className={"md:bg-white shadow-md rounded-2xl py-20 lg:py-10 px-4 md:px-12 lg:px-8 w-2/4 md:w-2/5 lg:w-1/5"} border={true} />
        </div>
      </section>
    </PageDiv>
  );
};

export default PreviewPage;