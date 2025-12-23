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
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { Cloudinary } from "@cloudinary/url-gen";

const ProfilePage = ({ className }) => {
  const { user: { details } } = useContext(NavigateContext);
  const { setSavedMessage } = useContext(UserContext);

  const inputRef = useRef();

  const [profileInput, setProfileInput] = useState({ first_name: "", last_name: "" });
  const handleProfileInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInput({ ...profileInput, [name]: value });
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    formData.append("upload_preset", "link_app_unsigned_preset");
    formData.append("allowed_formats", "jpg,png");
    let public_id;

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/doy5yq79f/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(`Upload Error: ${response.statusText}`);

      const data = await response.json();
      public_id = data.public_id;
    } catch (err) {
      console.error(err);
    }

    const cld = new Cloudinary({ cloud: { cloudName: "doy5yq79f" } });
    const image = cld.image(public_id).format("auto").quality("auto").resize(fill().gravity(focusOn(FocusOn.face())).width(1024).height(1024));

    updateUserDatabase({ user_profile: image });
  };

  const updateUserDatabase = async (data) => {
    try {
      const { error } = await supabase.from("users").update(data).eq("id", details.id).select();

      if (error) throw Error;
    } catch (err) {
      console.error(err);
    }
  };

  const [errorResponse, setErrorResponse] = useState({ first_name: "", last_name: "" });

  const updateProfileDetails = async () => {
    const updatedResponse = { first_name: "", last_name: "" };
    let notisMessage = "";
    if (profileInput.first_name || profileInput.last_name) {
      if ((!profileInput.first_name && !details.firstname) || (!profileInput.last_name && !details.lastname)) {
        if (!profileInput.first_name && !details.firstname) updatedResponse.first_name = "Can't be empty";
        if (!profileInput.last_name && !details.lastname) updatedResponse.last_name = "Can't be empty";
      }
      const updateFisrtName = profileInput.first_name && (profileInput.last_name || details.lastname);
      const updateLastName = profileInput.last_name && (profileInput.first_name || details.firstname);
      if (updateFisrtName || updateLastName) {
        const updatedDetails = { ...(updateFisrtName && { user_firstname: profileInput.first_name }), ...(updateLastName && { user_lastname: profileInput.last_name }) };
        updateUserDatabase(updatedDetails);
        setProfileInput({ ...profileInput, ...(updateFisrtName && { first_name: "" }), ...(updateLastName && { last_name: "" }) });
        notisMessage = "Your changes have been successfully saved!";
      }
    }
    setSavedMessage(notisMessage);
    setTimeout(() => {
      if (notisMessage) {
        setSavedMessage("");
      }
    }, 2000);
    setErrorResponse(updatedResponse);
  };

  return (
    <UserSection className={`${className} flex flex-col overflow-hidden`}>
      <TopicParagraph topic={"Profile Details"} text={"Add your details to create a personal touch to your profile."} />
      <main className="flex-1 overflow-y-auto no-scrollbar mb-4 md:mb-24 lg:mb-0">
        <div className="bg-grey-light mt-3 mb-2 p-2 md:p-6 lg:p-4 md:mt-8 md:mb-6 lg:mt-6 lg:mb-4 md:grid md:grid-cols-3 md:gap-x-6 lg:gap-x-44 md:items-center rounded-lg">
          <span className="text-xs md:text-xl lg:text-base text-grey-normal">Profile picture</span>
          <div key={details.profile} style={{ ...(details.profile && { backgroundImage: `url(${details.profile})` }) }} onClick={() => inputRef.current.click()} className={`${details.profile ? "" : "bg-purple-light"} bg-cover bg-no-repeat w-2/4 h-32 md:w-full md:h-60 lg:h-40 rounded-2xl my-1 md:m-0 flex flex-col gap-y-2 items-center justify-center cursor-pointer`}>
            <input type="file" className="p-0" accept="image/png, image/jpeg" ref={inputRef} hidden onChange={({ target: { files } }) => uploadToCloudinary(files[0])} />
            <img src={details.profile ? image_white_icon : image_purple_icon} className="w-6 md:w-10" alt="IMAGE PURPLE ICON" />
            <span className={`text-xs md:text-xl lg:text-base ${details.profile ? "text-white" : "text-purple-custom"}`}>+ Upload Image</span>
          </div>
          <span className="text-xs md:text-xl lg:text-base text-grey-normal">Image must be below 1024x1024px. Use PNG or JPG format.</span>
        </div>
        <div className="bg-grey-light p-2 md:p-6 lg:p-4 flex flex-col gap-y-1 md:gap-y-4 lg:gap-y-3 rounded-lg">
          <ProfileInput id={"profile-first-name"} label={"First name*"} type={"text"} name={"first_name"} placeholder={"e.g. John"} value={profileInput.first_name} onChange={handleProfileInput} errorMessage={errorResponse.first_name} />
          <ProfileInput id={"profile-last-name"} label={"Last name*"} type={"text"} name={"last_name"} placeholder={"e.g. Doe"} value={profileInput.last_name} onChange={handleProfileInput} errorMessage={errorResponse.last_name} />
        </div>
      </main>
      <UserButton buttonFunction={updateProfileDetails} changeColor={profileInput.first_name || profileInput.last_name} className={"absolute"} />
    </UserSection>
  );
};

export default ProfilePage;
