import { useContext, useState } from "react";
import { LinkContext } from "./LinkPage";
import LinkTemplate from "./LinkTemplate";
import bars_icon from "../../assets/bars-icon.png";
import github_black_icon from "../../assets/github-black-icon.png";
import link_black_icon from "../../assets/link-black-icon.png";
import arrow_down_icon from "../../assets/arrow-down-icon.png";

const LinkNew = () => {
  const { linkValue, setLinkValue, links, errorMessage, setErrorMessage, setShowNewLink } = useContext(LinkContext);
  const handleLinkValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLinkValue({ ...linkValue, [name]: value });
  };

  const [showAvailableLinks, setShowAvailableLinks] = useState(false);

  const availableLinks = [
    { id: 0, platform: "Github", icon: github_black_icon, placeholder: "https://github.com" },
    { id: 1, platform: "YouTube", icon: bars_icon, placeholder: "https://youtube.com" },
    { id: 2, platform: "LinkedIn", icon: link_black_icon, placeholder: "https://linkedin.com" },
    { id: 3, platform: "Instagram", icon: arrow_down_icon, placeholder: "https://instagram.com" },
  ];

  const changePlatform = (id) => {
    const { icon, platform, placeholder } = availableLinks.find((link) => link.id === id);
    setLinkValue({ ...linkValue, icon: icon, platform: platform, placeholder });
  };

  return <LinkTemplate errorMessage={errorMessage} removeFunction={() => setShowNewLink(false)} setErrorMessage={setErrorMessage} id={links.length > 0 ? links[links.length - 1].id + 1 : 0} name={"link"} iconValue={linkValue.icon} linkValue={linkValue.link} platformValue={linkValue.platform} handleInput={handleLinkValue} placeholder={linkValue.placeholder} link={false} readOnly={false} showIcon={true} showOption={showAvailableLinks} setShowOption={setShowAvailableLinks} availableLinks={availableLinks} changeOption={changePlatform} />;
};

export default LinkNew;