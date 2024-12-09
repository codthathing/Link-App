import TopicParagraph from "../common/TopicParagraph";
import phone_hand_icon from "../../assets/phone-hand-icon.png";

const LinkSection = () => {
  return (
    <section className="bg-grey-light text-center px-4 py-5 md:py-24 md:px-20 lg:py-12">
      <img src={phone_hand_icon} alt="PHONE HAND ICON" className="mx-auto mb-5 md:mb-14 w-32 md:w-64 lg:w-44 lg:mb-8" />
      <TopicParagraph topic={"Let’s get you started"} text={"Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"} />
    </section>
  );
};

export default LinkSection;