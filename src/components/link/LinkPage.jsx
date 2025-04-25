import UserSection from "../(user)/UserSection";
import TopicParagraph from "../common/TopicParagraph";
import LinkSection from "./LinkSection";
import PageButton from "../common/PageButton";
import { createContext, useContext, useState } from "react";
import LinkNew from "./LinkNew";
import LinkTemplate from "./LinkTemplate";
import github_black_icon from "../../assets/github-black-icon.png";
import github_white_icon from "../../assets/github-white-icon.png";
import { NavigateContext } from "../../services/NavigateProvider";
import UserButton from "../(user)/UserButton";
import { supabase } from "../../database/supabaseClient";

export const LinkContext = createContext();
const LinkPage = ({ className }) => {
  const { links, setLinks, linkValue, setLinkValue, showNewLink, setShowNewLink, setErrorMessage } = useContext(NavigateContext);

  const addNewLink = async () => {
    if (showNewLink) {
      let errorResponse = "";
      if (linkValue.link) {
        const newLink = { iconValue: linkValue.icon, iconValueTwo: linkValue.iconTwo, platformValue: linkValue.platform, linkValue: (linkValue.link.startsWith("https://") || linkValue.link.startsWith("http://")) ? linkValue.link : `https://${linkValue.link}` };
        setLinks([...links, { ...newLink, id: Date.now() }]);
        // const { data, error } = await supabase.from("links").insert([newLink]) /* .update({ iconValue, ... }).eq("id", id) // to update a row and get the data of the updated row back */ .select();
        // try {
        //   if (error) {
        //     throw new Error("Unable to update links");
        //   };
        //   console.log(data);
        // } catch (err) {
        //   console.error(err);
        // };
        setShowNewLink(false);
        setLinkValue({ icon: github_black_icon, iconTwo: github_white_icon, platform: "GitHub", placeholder: "https://github.com/johndoe", link: "" });
      } else {
        errorResponse = "Can't be empty";
      };
      setErrorMessage(errorResponse);
    };
  };

  const [linkMessage, setLinkMessage] = useState(false);

  const limitLinks = () => {
    if (links.length < 5) {
      setShowNewLink(true);
    } else {
      setLinkMessage(true);
    };
    setTimeout(() => {
      setLinkMessage(false);
    }, 2000);
  };

  const removeLink = async (id) => {
    setLinks(prevState => prevState.filter((link) => link.id !== id));
    // const { data, error } = await supabase.from("links").delete().eq("id", id).select(); /* To delete a particular row and return the deleted object */
    // try {
    //   if (error) {
    //     throw new Error("Unable to delete link");
    //   };
    //   console.log(data);
    // } catch (err) {
    //   console.error(err);
    // };
  };

  return (
    <UserSection style={{ paddingBottom: "0" }} className={`flex flex-col overflow-hidden ${className}`}>
      <TopicParagraph topic={"Customize your links"} text={"Add/edit/remove links below and then share all your profiles with the world!"} />
      <div className="mt-4 mb-2 md:mt-12 md:mb-7 lg:mt-6 lg:mb-1">
        <p className={`${linkMessage ? "block" : "hidden"} text-customRed text-[8px] md:text-base`}>Saved links upto 5</p>
        <PageButton buttonText={"+ Add new link"} hoverShadow={false} buttonFunction={limitLinks} style={"bg-transparent text-purple-custom border border-purple-custom"} hoverColor="hover:bg-purple-light" />
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar mb-4 md:mb-8 lg:mb-0">
        {(links.length || showNewLink) > 0 ?
          <section className="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-6">
            {links.map((link, index) => <LinkTemplate {...link} key={link.id} id={index} removeFunction={() => removeLink(link.id)} />)}
            {showNewLink && <LinkNew />}
          </section> : <LinkSection />}
      </div>
      <UserButton className={"sticky"} buttonFunction={addNewLink} changeColor={linkValue.link} />
    </UserSection>
  );
};

export default LinkPage;