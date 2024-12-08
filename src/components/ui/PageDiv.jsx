const PageDiv = ({children, className}) => {
  return (
    <div className={`bg-grey-light min-h-screen max-h-fit ${className}`}>{children}</div>
  );
};

export default PageDiv;