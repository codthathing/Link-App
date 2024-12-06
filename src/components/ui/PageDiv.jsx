const PageDiv = ({children, className}) => {
  return (
    <div className={`bg-grey-light h-screen ${className}`}>{children}</div>
  );
};

export default PageDiv;