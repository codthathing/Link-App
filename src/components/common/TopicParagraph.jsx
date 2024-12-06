const TopicParagraph = ({topic, text}) => {
  return (
    <>
      <h1 className="text-base md:text-3xl lg:text-xl font-bold text-grey-dark mb-1 md:mb-3 lg:mb-2">{topic}</h1>
      <p className="text-grey-normal text-sm md:text-xl lg:text-base">{text}</p>
    </>
  );
};

export default TopicParagraph;