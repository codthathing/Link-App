import TopicParagraph from "../common/TopicParagraph";
import UserSection from "../(user)/UserSection";
import UserButton from "../(user)/UserButton";
import image_purple_icon from "../../assets/image-purple-icon.png";
import image_white_icon from "../../assets/image-white-icon.png";
import ProfileInput from "./ProfileInput";
import { useContext, useRef, useState } from "react";
import { NavigateContext } from "../../services/NavigateProvider";

const ProfilePage = ({ className }) => {
  const { profileDetails, setProfileDetails } = useContext(NavigateContext);

  const inputRef = useRef();

  const [profileInput, setProfileInput] = useState({ profile_picture: "", first_name: "", last_name: "", email: "" });
  const handleProfileInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInput({ ...profileInput, [name]: value });
  };

  const [errorResponse, setErrorResponse] = useState({ first_name: "", last_name: "" });

  const updateProfileDetails = () => {
    const updatedResponse = { first_name: "", last_name: "" };
    if (profileInput.first_name || profileInput.last_name || profileInput.email) {
      if ((!profileInput.first_name && !profileDetails.first_name) || (!profileInput.last_name && !profileDetails.last_name)) {
        if (!profileInput.first_name && !profileDetails.first_name) updatedResponse.first_name = "Can't be empty";
        if (!profileInput.last_name && !profileDetails.last_name) updatedResponse.last_name = "Can't be empty";
      };
      setProfileDetails({ ...profileDetails, ...((profileInput.first_name && (profileInput.last_name || profileDetails.last_name)) && { first_name: profileInput.first_name }), ...((profileInput.last_name && (profileInput.first_name || profileDetails.first_name)) && { last_name: profileInput.last_name }), ...(profileInput.email && { email: profileInput.email }) });
      setProfileInput({ ...profileInput, ...((profileInput.first_name && (profileInput.last_name || profileDetails.last_name)) && { first_name: "" }), ...((profileInput.last_name && (profileInput.first_name || profileDetails.first_name)) && { last_name: "" }), ...(profileInput.email && { email: "" }) });
    };
    setErrorResponse(updatedResponse);
  };

  return (
    <UserSection className={`${className}`}>
      <TopicParagraph topic={"Profile Details"} text={"Add your details to create a personal touch to your profile."} />
      <div className="bg-grey-light mt-4 mb-3 p-3 md:p-6 lg:p-4 md:mt-8 md:mb-6 lg:mt-6 lg:mb-4 md:grid md:grid-cols-3 md:gap-x-6 lg:gap-x-44 md:items-center rounded-lg">
        <span className="text-xs md:text-xl lg:text-base text-grey-normal">Profile picture</span>
        <div style={{ ...(profileDetails.profile_picture && { backgroundImage: `url(${profileDetails.profile_picture})` }) }} onClick={() => inputRef.current.click()} className={`${profileDetails.profile_picture ? "" : "bg-purple-light"} bg-cover bg-no-repeat w-2/4 h-48 md:w-full md:h-60 lg:h-40 rounded-2xl my-3 md:m-0 flex flex-col gap-y-2 items-center justify-center cursor-pointer`}>
          <input type="file" name="profile_picture" className="p-0" accept="image/png, image/jpeg" ref={inputRef} hidden onChange={({ target: { files } }) => {
            if (files && files[0]) {
              const reader = new FileReader();
              reader.onload = (e) => {
                setProfileDetails({ ...profileDetails, profile_picture: e.target.result });
              };
              reader.readAsDataURL(files[0]);
            }
          }} />
          <img src={profileDetails.profile_picture ? image_white_icon : image_purple_icon} className="w-6 md:w-10" alt="IMAGE PURPLE ICON" />
          <span className={`text-xs md:text-xl lg:text-base ${profileDetails.profile_picture ? "text-white" : "text-purple-custom"}`}>+ Upload Image</span>
        </div>
        <span className="text-xs md:text-xl lg:text-base text-grey-normal">Image must be below 1024x1024px. Use PNG or JPG format.</span>
      </div>
      <div className="bg-grey-light p-3 md:p-6 lg:p-4 flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-3 rounded-lg">
        <ProfileInput label={"First name*"} type={"text"} name={"first_name"} placeholder={"e.g. John"} value={profileInput.first_name} onChange={handleProfileInput} errorMessage={errorResponse.first_name} />
        <ProfileInput label={"Last name*"} type={"text"} name={"last_name"} placeholder={"e.g. Doe"} value={profileInput.last_name} onChange={handleProfileInput} errorMessage={errorResponse.last_name} />
        <ProfileInput label={"Email"} type={"email"} name={"email"} placeholder={"e.g. email@example.com"} value={profileInput.email} onChange={handleProfileInput} />
      </div>
      <UserButton buttonFunction={updateProfileDetails} changeColor={profileInput.profile_picture || profileInput.first_name || profileInput.last_name || profileInput.email} className={"absolute"} />
    </UserSection>
  );
};

export default ProfilePage