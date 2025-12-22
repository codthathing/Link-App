import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { NavigateContext } from '../../services/NavigateProvider';
import { supabase } from '../../database/supabaseClient';

const ProtectedRoute = ({ loading }) => {
  const { session, setUser } = useContext(NavigateContext);

  useEffect(() => {
    if (session) {
      (async () => {
        try {
          const { data, error } = await supabase.from("users").select(`*, users_links(id, platform_name, platform_link, main_icon, secondary_icon)`).eq("id", session.user.id).single();
          if (error) throw error;

          setUser({ links: data["users_links"], details: { id: data.id, email: data.user_email, firstname: data.user_firstname, lastname: data.user_lastname, profile: data.user_profile } });
        } catch (err) {
          console.error(err);
        };
      })();
    };
  }, [session]);

  useEffect(() => {
    if (session) {
      supabase.channel('custom-delete-channel').on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'users_links' }, (payload) => setUser(prevState => ({ ...prevState, links: prevState.links.filter(({ id }) => id !== payload.old.id) }))).subscribe();
      supabase.channel('custom-insert-channel').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'users_links' }, (payload) => setUser(prevState => ({ ...prevState, links: [...prevState.links, payload.new] }))).subscribe();
      supabase.channel('custom-update-channel').on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, (payload) => setUser(prevState => ({ ...prevState, details: { ...prevState.details, ...payload.new } }))).subscribe();
    };
  }, []);

  if (loading) {
    return null;
  };

  if (!session) {
    return <Navigate to={"/"} replace />;
  };

  return <Outlet />;
};

export default ProtectedRoute;