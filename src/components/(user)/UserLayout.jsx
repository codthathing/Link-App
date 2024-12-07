import LinkPage from "../link/LinkPage";
import ProfilePage from "../profile/ProfilePage";

const UserLayout = ({ page, className }) => {
  return (
    <div className={className}>
      {page === "LINK" ? <LinkPage /> : <ProfilePage />}
    </div>
  );
};

export default UserLayout;