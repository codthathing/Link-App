import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageDiv from "../components/ui/PageDiv";
import LogoText from "../components/common/LogoText";
import TopicParagraph from "../components/common/TopicParagraph";
import SignInSection from "../components/(sign-in)/SignInSection";
import SignInMain from "../components/(sign-in)/SignInMain";
import SignInInput from "../components/(sign-in)/SignInInput";
import PageButton from "../components/common/PageButton";
import SignInOption from "../components/(sign-in)/SignInOption";
import { supabase } from "../database/supabaseClient";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({email:"", password: "", confirm_password: ""});
  const handleSignUpInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpInput({...signUpInput, [name]: value});
  };

  const navigate = useNavigate();

  const [feedbackMessages, setFeedbackMessages] = useState({ email: "", password: "", confirm_password: "" });
  const submitSignUpInput = async () => {
    const newFeedback = { email: "", password: "", confirm_password: "" };
    if(!signUpInput.email || !signUpInput.password || !signUpInput.confirm_password) {
      if (!signUpInput.email) newFeedback.email = "Can't be empty";
      if (!signUpInput.password) newFeedback.password = "Please check again";
      if (!signUpInput.confirm_password) newFeedback.confirm_password = "Please check again";
    } else {      
      let { data, error } = await supabase.auth.signUp({
        email: signUpInput.email,
        password: signUpInput.password
      })
      navigate("/user-page");
    };
    setFeedbackMessages(newFeedback);
  };

  return (
    <PageDiv className={"sign-in-div"}>
      <div className="md:w-3/4 lg:w-2/5">
        <LogoText className={"p-6"} />
        <SignInSection>
          <TopicParagraph topic={"Create account"} text={"Let's get you started sharing your links"} />
          <SignInMain>
            <SignInInput label={"Email address"} id={"login-email-input"} type={"email"} name={"email"} value={signUpInput.email} onChange={handleSignUpInput} placeholder={"e.g.alex@gmail.com"} errorMessage={feedbackMessages.email} />
            <SignInInput label={"Create password"} id={"login-password-input"} type={"password"} name={"password"} value={signUpInput.password} onChange={handleSignUpInput} placeholder={"At least 8 characters"} errorMessage={feedbackMessages.password} />
            <SignInInput label={"Confirm password"} id={"login-confirm-password-input"} type={"password"} name={"confirm_password"} value={signUpInput.confirm_password} onChange={handleSignUpInput} placeholder={"At least 8 characters"} errorMessage={feedbackMessages.confirm_password} />
          </SignInMain>
          <p className="text-xs md:text-base mb-3 md:mb-8 text-grey-normal">Password must contain at least 8 characters</p>
          <PageButton buttonFunction={submitSignUpInput} buttonText={"Create account"} style={"bg-purple-custom text-white"} />
          <SignInOption mainText={"Already have an account?"} linkText={"Login"} linkTo={"/"} />
        </SignInSection>
      </div>
    </PageDiv>
  );
};

export default SignUpPage;