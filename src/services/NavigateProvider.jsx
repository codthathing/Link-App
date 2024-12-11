import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import github_black_icon from "../assets/github-black-icon.png";
import github_white_icon from "../assets/github-white-icon.png";

export const NavigateContext = createContext();
const NavigateProvider = ({ children }) => {
  const [links, setLinks] = useLocalStorage("links", []);
  const [linkValue, setLinkValue] = useState({ icon: github_black_icon, iconTwo: github_white_icon, platform: "GitHub", placeholder: "https://github.com/johndoe", link: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showNewLink, setShowNewLink] = useState(false);
  const [profileDetails, setProfileDetails] = useLocalStorage("profileDetails", {});


  return <NavigateContext.Provider value={{ links, setLinks, linkValue, setLinkValue, errorMessage, setErrorMessage, showNewLink, setShowNewLink, profileDetails, setProfileDetails }}>{children}</NavigateContext.Provider>
};

export default NavigateProvider;