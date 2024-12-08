import UserSection from "../(user)/UserSection";
import TopicParagraph from "../common/TopicParagraph";
import PageButton from "../common/PageButton";
import phone_hand_icon from "../../assets/phone-hand-icon.png";

const LinkPage = () => {
  return (
    <UserSection className={"relative border"}>
      <TopicParagraph topic={"Customize your links"} text={"Add/edit/remove links below and then share all your profiles with the world!"} />
      <PageButton buttonText={"+ Add new link"} style={"bg-transparent text-purple-custom border border-purple-custom mt-4 mb-2 md:mt-12 md:mb-7 lg:mt-6 lg:mb-4 w-full"} hoverColor="hover:bg-purple-light" />
      <section className="bg-grey-light text-center px-4 py-5 md:py-24 md:px-20 lg:py-16">
        <img src={phone_hand_icon} alt="PHONE HAND ICON" className="mx-auto mb-5 md:mb-14 w-32 md:w-64 lg:w-44 lg:mb-8" />
        <TopicParagraph topic={"Let’s get you started"} text={"Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"} />
      </section>
      <div className="absolute bottom-0 border-t border-grey-light text-end inset-x-0 px-5 pt-5 md:px-7 md:pt-7 lg:px-4 lg:mt-4">
        <PageButton buttonText={"Save"} style={`bg-purple-hover text-white w-full lg:px-12`} />
      </div>
    </UserSection>
  );
};

export default LinkPage;