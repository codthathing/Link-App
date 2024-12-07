import { useState } from "react";
import page_logo from "../assets/page-logo.png";
import link_icon from "../assets/link-icon.png";
import eye_icon from "../assets/eye-icon.png";
import user_icon from "../assets/user-icon.png";
import PageDiv from "../components/ui/PageDiv";
import UserLayout from "../components/(user)/UserLayout";
import UserIcon from "../components/(user)/UserIcon";

const UserPage = () => {
  const [presentPage, setPresentPage] = useState("LINK");

  return (
    <PageDiv>
      <header className="p-4 bg-white flex justify-between items-center">
        <img src={page_logo} className="w-7 md:w-12 lg:w-10" alt="PAGE LOGO" />
        <div className="flex gap-x-2 items-center">
          <UserIcon src={link_icon} alt={"LINK ICON"} page={presentPage} type={"LINK"} buttonFunction={() => setPresentPage("LINK")} />
          <UserIcon src={user_icon} alt={"PROFILE ICON"} page={presentPage} type={"PROFILE"} buttonFunction={() => setPresentPage("PROFILE")} />
        </div>
        <UserIcon src={eye_icon} alt={"EYE ICON"} type={"VIEW"} />
      </header>
      {/* <div className="grid grid-cols-3 gap-5 p-5">
        <section className="hidden lg:block bg-red-500 h-full">
          heelo worlde
        </section>
        <UserLayout page={presentPage} className={"col-span-2"} />
      </div> */}
    </PageDiv>
  );
};

export default UserPage;