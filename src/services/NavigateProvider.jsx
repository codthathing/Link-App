import { createContext, useState } from "react";
import github_black_icon from "../assets/github-black-icon.png";
import github_white_icon from "../assets/github-white-icon.png";

const CURRENT_VERSION = '1.0.4';

const APP_VERSION = localStorage.getItem('APP_VERSION');
if (APP_VERSION !== CURRENT_VERSION) {
  localStorage.removeItem('my-custom-session-key');
  localStorage.setItem('APP_VERSION', CURRENT_VERSION);
};

export const NavigateContext = createContext();
const NavigateProvider = ({ children }) => {
  const [linkValue, setLinkValue] = useState({ icon: github_black_icon, iconTwo: github_white_icon, platform: "GitHub", placeholder: "https://github.com/johndoe", link: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showNewLink, setShowNewLink] = useState(false);
  const [linkEmail, setLinkEmail] = useState("");
  const [session, setSession] = useState(null);
  const [user, setUser] = useState({ links: [], details: {} });
  const copyLink = (id) => {
    const { linkValue } = user.links.find((link) => link.id === id);
    setLinkEmail(linkValue);
  };
  const [updateDetails, setUpdateDetails] = useState({ text: "", error: false });


  return <NavigateContext.Provider value={{  linkValue, setLinkValue, errorMessage, setErrorMessage, showNewLink, setShowNewLink, copyLink, linkEmail, setLinkEmail, session, setSession, user, setUser, updateDetails, setUpdateDetails }}>{children}</NavigateContext.Provider>
};

export default NavigateProvider;