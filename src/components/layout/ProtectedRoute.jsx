import { useContext, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { NavigateContext } from '../../services/NavigateProvider';
import { supabase } from '../../database/supabaseClient';

const ProtectedRoute = ({ loading }) => {
  const { session, setUser } = useContext(NavigateContext);
  const [userLinksUpdate, setUserLinksUpdate] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchUserLinks = async () => {
        try {
          const { data, error } = await supabase.from("users").select(`*, user_links(id, iconValue, iconValueTwo, platformValue, linkValue)`).eq("id", session.user.id).single();

          if (error ) throw new Error(error);

          setUser({ links: data["user_links"], details: { id: data.id, email: data.email, first_name: data.first_name, last_name: data.last_name, image_url: data.image_url } });
        } catch (err) {
          console.error(err);
        };
      }
      fetchUserLinks();
    };
  }, [session, userLinksUpdate]);

  useEffect(() => {
    if(session) {
      const userLinks = supabase.channel('custom-all-channel').on('postgres_changes', { event: '*', schema: 'public', table: 'user_links' }, payload => setUserLinksUpdate(payload)).subscribe();
      const users = supabase.channel('custom-update-channel').on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, payload => setUserLinksUpdate(payload)).subscribe();

      return () => {
        supabase.removeChannel(userLinks);
        supabase.removeChannel(users);
      };
    };
  }, []);

  if (loading) {
    return null; // Or a loading indicator
  };

  if (!session) {
    return <Navigate to={"/"} replace />;
  };

  return <Outlet />;
};

export default ProtectedRoute;