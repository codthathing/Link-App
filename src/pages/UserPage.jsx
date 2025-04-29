import { createContext, useContext, useEffect, useState } from "react";
import LogoText from "../components/common/LogoText";
import link_purple_icon from "../assets/link-purple-icon.png";
import link_black_icon from "../assets/link-black-icon.png";
import user_black_icon from "../assets/user-black-icon.png";
import user_purple_icon from "../assets/user-purple-icon.png";
import eye_icon from "../assets/eye-icon.png";
import PageDiv from "../components/ui/PageDiv";
import UserLayout from "../components/(user)/UserLayout";
import UserIcon from "../components/(user)/UserIcon";
import UserSection from "../components/(user)/UserSection";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/(user)/UserProfile";
import PageNotification from "../components/common/PageNotification";
import { supabase } from "../database/supabaseClient";

export const UserContext = createContext();
const UserPage = () => {
  const navigate = useNavigate();
  const [presentPage, setPresentPage] = useState("LINK");
  const [savedMessage, setSavedMessage] = useState("");

  // const [userLinks, setUserLinks] = useState(null);
  // const [orderBy, setOrderBy] = useState("created_at");

  // useEffect(() => {
  //   const fetchUserLinks = async () => {
  //     const { data, error } = await supabase.from("users").select("*", user_links("*"))/* .order(orderBy, { ascending: false }) */ /* .eq("id", id).single(); // to select individual row as a object instead of array based on the id */; 
  //     try {
  //       if (error) {
  //         throw new Error("Unable to get links");
  //       };
  //       setUserLinks(data);
  //     } catch (err) {
  //       console.error(err);
  //     };
  //   }

  //   fetchUserLinks();
  // }, [orderBy]);

  return (
    <UserContext.Provider value={{setSavedMessage}}>
      <PageDiv className={"flex flex-col gap-y-4 md:gap-y-7 lg:gap-y-4 md:p-7 lg:p-4 relative"}>
        <header className="p-4 md:p-6 lg:p-4 bg-white flex justify-between items-center md:rounded-md">
          <LogoText style={"hidden md:block"} />
          <div className="flex gap-x-2 lg:gap-x-5 items-center">
            <UserIcon srcOne={link_purple_icon} srcTwo={link_black_icon} alt={"LINK ICON"} page={presentPage} type={"LINK"} buttonFunction={() => setPresentPage("LINK")} text={"Links"} />
            <UserIcon srcOne={user_purple_icon} srcTwo={user_black_icon} alt={"PROFILE ICON"} page={presentPage} type={"PROFILE"} buttonFunction={() => setPresentPage("PROFILE")} text={"Profile Details"} />
          </div>
          <UserIcon srcOne={eye_icon} buttonFunction={() => navigate("/preview-page")} alt={"EYE ICON"} type={"VIEW"} text={"Preview"} />
        </header>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 px-4 pb-4 md:p-0 flex-1 overflow-hidden">
          <UserSection className={"hidden lg:flex items-center justify-center"}>
            <UserProfile backgroundImage={true} className={"py-[18] w-72 px-6"} />
          </UserSection>
          <UserLayout page={presentPage} className={"lg:col-span-2 relative"} />
        </div>
        <PageNotification type={"SAVED"} notisMessage={savedMessage} />
      </PageDiv>
    </UserContext.Provider>
  );
};

export default UserPage;