import TopicParagraph from "../common/TopicParagraph";
import UserSection from "../(user)/UserSection";
import UserButton from "../(user)/UserButton";
import image_purple_icon from "../../assets/image-purple-icon.png";
import image_white_icon from "../../assets/image-white-icon.png";
import ProfileInput from "./ProfileInput";
import { useContext, useRef, useState } from "react";
import { NavigateContext } from "../../services/NavigateProvider";
import { UserContext } from "../../pages/UserPage";
import { supabase } from "../../database/supabaseClient";

const ProfilePage = ({ className }) => {
  const { user: { details } } = useContext(NavigateContext);
  const { setSavedMessage } = useContext(UserContext);

  const inputRef = useRef();

  const [profileInput, setProfileInput] = useState({ profile_picture: "", first_name: "", last_name: "", email: "" });
  const handleProfileInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInput({ ...profileInput, [name]: value });
  };

  const [errorResponse, setErrorResponse] = useState({ first_name: "", last_name: "" });

  const updateUserDatabase = async (data) => {
    try {
      const { error } = await supabase.from('users').update(data).eq('email', details.email).select();
      
      if (error) throw new Error(error);
    } catch (err) {
      console.error(err);
    };
  }

  const updateProfileDetails = async () => {
    const updatedResponse = { first_name: "", last_name: "" };
    let notisMessage = "";
    if (profileInput.first_name || profileInput.last_name || profileInput.email) {
      if ((!profileInput.first_name && !details.first_name) || (!profileInput.last_name && !details.last_name)) {
        if (!profileInput.first_name && !details.first_name) updatedResponse.first_name = "Can't be empty";
        if (!profileInput.last_name && !details.last_name) updatedResponse.last_name = "Can't be empty";
      };
      const updateFisrtName = (profileInput.first_name && (profileInput.last_name || details.last_name));
      const updateLastName = (profileInput.last_name && (profileInput.first_name || details.first_name));
      const updateEmail = profileInput.email && (profileInput.email !== details.email);
      if (updateFisrtName || updateLastName || updateEmail) {
        const updatedDetails = { ...(updateFisrtName && { first_name: profileInput.first_name }), ...(updateLastName && { last_name: profileInput.last_name }), ...(updateEmail && { email: profileInput.email }) };
        updateUserDatabase(updatedDetails);
        setProfileInput({ ...profileInput, ...(updateFisrtName && { first_name: "" }), ...(updateLastName && { last_name: "" }), ...(updateEmail && { email: "" }) });
        notisMessage = "Your changes have been successfully saved!";
      };
    };
    setSavedMessage(notisMessage);
    setTimeout(() => {
      if (notisMessage) {
        setSavedMessage("");
      };
    }, 2000);
    setErrorResponse(updatedResponse);
  };

  return (
    <UserSection className={`${className} flex flex-col overflow-hidden`}>
      <TopicParagraph topic={"Profile Details"} text={"Add your details to create a personal touch to your profile."} />
      <main className="flex-1 overflow-y-auto no-scrollbar mb-4 md:mb-24 lg:mb-0">
        <div className="bg-grey-light mt-3 mb-2 p-2 md:p-6 lg:p-4 md:mt-8 md:mb-6 lg:mt-6 lg:mb-4 md:grid md:grid-cols-3 md:gap-x-6 lg:gap-x-44 md:items-center rounded-lg">
          <span className="text-xs md:text-xl lg:text-base text-grey-normal">Profile picture</span>
          <div style={{ ...(details.image_url && { backgroundImage: `url(${details.image_url})` }) }} onClick={() => inputRef.current.click()} className={`${details.image_url ? "" : "bg-purple-light"} bg-cover bg-no-repeat w-2/4 h-32 md:w-full md:h-60 lg:h-40 rounded-2xl my-1 md:m-0 flex flex-col gap-y-2 items-center justify-center cursor-pointer`}>
            <input type="file" name="profile_picture" className="p-0" accept="image/png, image/jpeg" ref={inputRef} hidden onChange={({ target: { files } }) => {
              if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => updateUserDatabase({ image_url: e.target.result });
                reader.readAsDataURL(files[0]);
              }
            }} />
            <img src={details.image_url ? image_white_icon : image_purple_icon} className="w-6 md:w-10" alt="IMAGE PURPLE ICON" />
            <span className={`text-xs md:text-xl lg:text-base ${details.image_url ? "text-white" : "text-purple-custom"}`}>+ Upload Image</span>
          </div>
          <span className="text-xs md:text-xl lg:text-base text-grey-normal">Image must be below 1024x1024px. Use PNG or JPG format.</span>
        </div>
        <div className="bg-grey-light p-2 md:p-6 lg:p-4 flex flex-col gap-y-1 md:gap-y-4 lg:gap-y-3 rounded-lg">
          <ProfileInput id={"profile-first-name"} label={"First name*"} type={"text"} name={"first_name"} placeholder={"e.g. John"} value={profileInput.first_name} onChange={handleProfileInput} errorMessage={errorResponse.first_name} />
          <ProfileInput id={"profile-last-name"} label={"Last name*"} type={"text"} name={"last_name"} placeholder={"e.g. Doe"} value={profileInput.last_name} onChange={handleProfileInput} errorMessage={errorResponse.last_name} />
          <ProfileInput id={"profile-email"} label={"Email"} type={"email"} name={"email"} placeholder={"e.g. email@example.com"} value={profileInput.email} onChange={handleProfileInput} />
        </div>
      </main>
      <UserButton buttonFunction={updateProfileDetails} changeColor={profileInput.profile_picture || profileInput.first_name || profileInput.last_name || profileInput.email} className={"absolute"} />
    </UserSection>
  );
};

export default ProfilePage