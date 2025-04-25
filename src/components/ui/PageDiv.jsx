const PageDiv = ({children, className}) => {
  return (
    <div className={`h-screen ${className}`}>{children}</div>
  );
};

export default PageDiv;