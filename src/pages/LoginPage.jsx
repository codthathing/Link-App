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
  const [loginInput, setLoginInput] = useState({email:"", password: ""});
  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInput({...loginInput, [name]: value});
  };

  return (
    <PageDiv className={"sign-in-div"}>
      <div className="md:w-3/4 lg:w-2/5 md:my-5">
        <LogoText />
        <SignInSection>
          <TopicParagraph topic={"Login"} text={"Add your details below to get back into the app"} />
          <SignInMain>
            <SignInInput label={"Email address"} id={"login-email-input"} type={"email"} name={"email"} value={loginInput.email} onChange={handleLoginInput} placeholder={"e.g.alex@gmail.com"} errorMessage={"Can't be empty"} />
            <SignInInput label={"Password"} id={"login-password-input"} type={"password"} name={"password"} value={loginInput.password} onChange={handleLoginInput} placeholder={"Enter your password"} errorMessage={"Please check again"} />
          </SignInMain>
          <PageButton />
          <SignInOption mainText={"Don't have an account?"} linkText={"Create account"} linkTo={"/sign-up"} />
        </SignInSection>
      </div>
    </PageDiv>
  );
};

export default LoginPage;