import { useContext, useEffect, useRef, useState } from "react";
import { NavigateContext } from "../../services/NavigateProvider";
import LinkTemplate from "./LinkTemplate";
import github_black_icon from "../../assets/github-black-icon.png";
import youtube_black_icon from "../../assets/youtube-black-icon.png";
import linkedin_black_icon from "../../assets/linkedin-black-icon.png";
import facebook_black_icon from "../../assets/facebook-black-icon.png";
import twitter_black_icon from "../../assets/twitter-black-icon.png";
import other_socials_icon from "../../assets/other-socials-icon.webp";
import github_white_icon from "../../assets/github-white-icon.png";
import youtube_white_icon from "../../assets/youtube-white-icon.png";
import linkedin_white_icon from "../../assets/linkedin-white-icon.png";
import facebook_white_icon from "../../assets/facebook-white-icon.png";
import twitter_white_icon from "../../assets/twitter-white-icon.png";

const LinkNew = () => {
  const { linkValue, setLinkValue, errorMessage, setErrorMessage, setShowNewLink, user: { links } } = useContext(NavigateContext);
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
    { id: 0, platform: "Github", icon: github_black_icon, iconTwo: github_white_icon, placeholder: "https://github.com/johndoe" },
    { id: 1, platform: "YouTube", icon: youtube_black_icon, iconTwo: youtube_white_icon, placeholder: "https://youtube.com/johndoe" },
    { id: 2, platform: "LinkedIn", icon: linkedin_black_icon, iconTwo: linkedin_white_icon, placeholder: "https://linkedin.com/johndoe" },
    { id: 3, platform: "Facebook", icon: facebook_black_icon, iconTwo: facebook_white_icon, placeholder: "https://facebook.com/johndoe" },
    { id: 4, platform: "Twitter", icon: twitter_black_icon, iconTwo: twitter_white_icon, placeholder: "https://twitter.com/johndoe" },
    { id: 5, platform: "Others", icon: other_socials_icon, iconTwo: other_socials_icon, placeholder: "https://other-socials.com/johndoe" },
  ];

  const changePlatform = (id) => {
    const { icon, iconTwo, platform, placeholder } = availableLinks.find((link) => link.id === id);
    setLinkValue({ ...linkValue, icon: icon, iconTwo: iconTwo, platform: platform, placeholder });
  };
  
  return <LinkTemplate errorMessage={errorMessage} inputRef={inputRef} removeFunction={() => setShowNewLink(false)} setErrorMessage={setErrorMessage} id={links.length} name={"link"} main_icon={linkValue.icon} platform_link={linkValue.link} platform_name={linkValue.platform} handleInput={handleLinkValue} placeholder={linkValue.placeholder} link={false} readOnly={false} showIcon={true} showOption={showAvailableLinks} setShowOption={setShowAvailableLinks} availableLinks={availableLinks} changeOption={changePlatform} />;
};

export default LinkNew;