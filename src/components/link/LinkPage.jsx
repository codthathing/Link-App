import UserSection from "../(user)/UserSection";
import TopicParagraph from "../common/TopicParagraph";
import LinkSection from "./LinkSection";
import PageButton from "../common/PageButton";
import { createContext, useState } from "react";
import LinkNew from "./LinkNew";
import LinkTemplate from "./LinkTemplate";
import github_black_icon from "../../assets/github-black-icon.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const LinkContext = createContext();
const LinkPage = ({ className }) => {
  const [links, setLinks] = useLocalStorage("links", []);
  const [linkValue, setLinkValue] = useState({ icon: github_black_icon, platform: "GitHub", placeholder: "https://github.com/johndoe", link: "" });

  const [showNewLink, setShowNewLink] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const addNewLink = () => {
    if (showNewLink) {
      let errorResponse = "";
      if (linkValue.link) {
        const newLink = { id: links.length > 0 ? links[links.length - 1].id + 1 : 0, iconValue: linkValue.icon, platformValue: linkValue.platform, linkValue: linkValue.link };
        setLinks([...links, newLink]);
        setShowNewLink(false);
        setLinkValue({ icon: github_black_icon, platform: "GitHub", placeholder: "https://github.com/johndoe", link: "" });
      } else {
        errorResponse = "Can't be empty";
      };
      setErrorMessage(errorResponse);
    };
  };

  const removeLink = (id) => {
    setLinks(prevState => prevState.filter((link) => link.id !== id));
  };

  return (
    <LinkContext.Provider value={{ linkValue, setLinkValue, links, errorMessage, setErrorMessage, showNewLink, setShowNewLink }}>
      <UserSection style={{paddingBottom: "0"}} className={`relative overflow-y-auto no-scrollbar ${className}`}>
        <TopicParagraph topic={"Customize your links"} text={"Add/edit/remove links below and then share all your profiles with the world!"} />
        <PageButton buttonText={"+ Add new link"} hoverShadow={false} buttonFunction={() => setShowNewLink(true)} style={"bg-transparent text-purple-custom border border-purple-custom mt-4 mb-2 md:mt-12 md:mb-7 lg:mt-6 lg:mb-4"} hoverColor="hover:bg-purple-light" />
        {(links.length || showNewLink) > 0 ?
          <section className="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-6 mb-4 md:mb-8 lg:mb-0">
            {links.map((link) => <LinkTemplate {...link} removeFunction={() => removeLink(link.id)} />)}
            {showNewLink && <LinkNew />}
          </section> : <LinkSection />}
        <div className="sticky bottom-0 border-t border-grey-light bg-white z-10 text-end inset-x-0 px-5 pt-5 md:px-7 md:pt-7 lg:px-4 lg:mt-4">
          <PageButton buttonText={"Save"} buttonFunction={addNewLink} style={`${linkValue.link ? "bg-purple-custom" : "bg-purple-light"} text-white md:w-fit md:px-12`} />
        </div>
      </UserSection>
    </LinkContext.Provider>
  );
};

export default LinkPage;