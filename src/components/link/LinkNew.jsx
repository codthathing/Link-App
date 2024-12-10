import { useContext, useEffect, useRef, useState } from "react";
import { LinkContext } from "./LinkPage";
import LinkTemplate from "./LinkTemplate";
import github_black_icon from "../../assets/github-black-icon.png";
import youtube_black_icon from "../../assets/youtube-black-icon.png";
import linkedin_black_icon from "../../assets/linkedin-black-icon.png";
import facebook_black_icon from "../../assets/facebook-black-icon.png";
import twitter_black_icon from "../../assets/twitter-black-icon.png";
import other_socials_icon from "../../assets/other-socials-icon.webp";

const LinkNew = () => {
  const { linkValue, setLinkValue, links, errorMessage, setErrorMessage, setShowNewLink } = useContext(LinkContext);
  const handleLinkValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLinkValue({ ...linkValue, [name]: value });
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [showAvailableLinks, setShowAvailableLinks] = useState(false);

  const availableLinks = [
    { id: 0, platform: "Github", icon: github_black_icon, placeholder: "https://github.com/johndoe" },
    { id: 1, platform: "YouTube", icon: youtube_black_icon, placeholder: "https://youtube.com/johndoe" },
    { id: 2, platform: "LinkedIn", icon: linkedin_black_icon, placeholder: "https://linkedin.com/johndoe" },
    { id: 3, platform: "Facebook", icon: facebook_black_icon, placeholder: "https://facebook.com/johndoe" },
    { id: 4, platform: "Twitter", icon: twitter_black_icon, placeholder: "https://twitter.com/johndoe" },
    { id: 5, platform: "Others", icon: other_socials_icon, placeholder: "https://other-socials.com/johndoe" },
  ];

  const changePlatform = (id) => {
    const { icon, platform, placeholder } = availableLinks.find((link) => link.id === id);
    setLinkValue({ ...linkValue, icon: icon, platform: platform, placeholder });
  };

  return <LinkTemplate errorMessage={errorMessage} inputRef={inputRef} removeFunction={() => setShowNewLink(false)} setErrorMessage={setErrorMessage} id={links.length > 0 ? links[links.length - 1].id + 1 : 0} name={"link"} iconValue={linkValue.icon} linkValue={linkValue.link} platformValue={linkValue.platform} handleInput={handleLinkValue} placeholder={linkValue.placeholder} link={false} readOnly={false} showIcon={true} showOption={showAvailableLinks} setShowOption={setShowAvailableLinks} availableLinks={availableLinks} changeOption={changePlatform} />;
};

export default LinkNew;