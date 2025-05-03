import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { NavigateContext } from '../../services/NavigateProvider';
import { supabase } from '../../database/supabaseClient';

const ProtectedRoute = ({ loading }) => {
  const { session, setUser } = useContext(NavigateContext);

  useEffect(() => {
    if (session) {
      let isMounted = true;

      (async () => {
        try {
          const { data: { user }, error } = await supabase.auth.getUser();
          if (error) throw error;

          if (user && isMounted) {
            const { data, error: queryError } = await supabase.from("users").select(`*, user_links(id, iconValue, iconValueTwo, platformValue, linkValue)`).eq("id", session.user.id).single();
            if (queryError) console.error(queryError);

            if (isMounted) setUser({ links: data["user_links"], details: { id: data.id, email: data.email, first_name: data.first_name, last_name: data.last_name, image_url: data.image_url } });
          };
        } catch (err) {
          if (isMounted) console.error(err);
        };

        return () => isMounted = false;
      })();
    };
  }, [session]);

  useEffect(() => {
    if (session) {
      const userDeleteLinks = supabase.channel('custom-delete-channel').on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'user_links' }, (payload) => setUser(prevState => ({ ...prevState, links: prevState.links.filter(({ id }) => id !== payload.old.id) }))).subscribe();
      const userInsertLinks = supabase.channel('custom-insert-channel').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'user_links' }, (payload) => setUser(prevState => ({ ...prevState, links: [...prevState.links, payload.new] }))).subscribe();
      const users = supabase.channel('custom-update-channel').on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, (payload) => setUser(prevState => ({ ...prevState, details: { ...prevState.details, ...payload.new } }))).subscribe();

      return () => {
        supabase.removeChannel(userDeleteLinks);
        supabase.removeChannel(userInsertLinks);
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