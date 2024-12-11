import LinkPage from "../link/LinkPage";
import ProfilePage from "../profile/ProfilePage";

const UserLayout = ({ page, className }) => {
  return (
    <>
      {page === "LINK" ? <LinkPage className={className} /> : <ProfilePage className={className} />}
    </>
  );
};

export default UserLayout;