import { useState } from "react";
import PageDiv from "../components/ui/PageDiv";
import LogoText from "../components/common/LogoText";
import TopicParagraph from "../components/common/TopicParagraph";
import SignInSection from "../components/(sign-in)/SignInSection";
import SignInMain from "../components/(sign-in)/SignInMain";
import SignInInput from "../components/(sign-in)/SignInInput";
import PageButton from "../components/common/PageButton";
import SignInOption from "../components/(sign-in)/SignInOption";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const [feedbackMessages, setFeedbackMessages] = useState({ email: "", password: "" });
  const submitLoginInput = () => {
    const newFeedback = { email: "", password: "" };
    if(!loginInput.email || !loginInput.password) {
      if (!loginInput.email) newFeedback.email = "Can't be empty";
      if (!loginInput.password) newFeedback.password = "Please check again";
    };
    setFeedbackMessages(newFeedback);
  };

  return (
    <PageDiv className={"sign-in-div"}>
      <div className="md:w-3/4 lg:w-2/5 md:my-5">
        <LogoText className={"p-6"} />
        <SignInSection>
          <TopicParagraph topic={"Login"} text={"Add your details below to get back into the app"} />
          <SignInMain>
            <SignInInput label={"Email address"} id={"login-email-input"} type={"email"} name={"email"} value={loginInput.email} onChange={handleLoginInput} placeholder={"e.g.alex@gmail.com"} errorMessage={feedbackMessages.email} />
            <SignInInput label={"Password"} id={"login-password-input"} type={"password"} name={"password"} value={loginInput.password} onChange={handleLoginInput} placeholder={"Enter your password"} errorMessage={feedbackMessages.password} />
          </SignInMain>
          <PageButton buttonFunction={submitLoginInput} buttonText={"Login"} style={"bg-purple-custom text-white w-full"} />
          <SignInOption mainText={"Don't have an account?"} linkText={"Create account"} linkTo={"/sign-up"} />
        </SignInSection>
      </div>
    </PageDiv>
  );
};

export default LoginPage;