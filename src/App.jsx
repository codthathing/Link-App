import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PreviewPage from "./pages/PreviewPage";
import { supabase } from "./database/supabaseClient";
import { NavigateContext } from "./services/NavigateProvider";
import PageUpdate from "./components/ui/PageUpdate";

function App() {
  const { setSession, session } = useContext(NavigateContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setIsLoading(false);
      });
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session)); /* Listen for auth changes */
  
      return () => subscription.unsubscribe();
    })();
  }, []);

  return (
    <>
      <PageUpdate />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!session ? <LoginPage /> : <Navigate to="/user-page" replace />} />
          <Route path="/sign-up" element={!session ? <SignUpPage /> : <Navigate to="/user-page" replace />} />
          <Route element={<ProtectedRoute loading={isLoading} />}>
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/preview-page" element={<PreviewPage />} />
          </Route>
          <Route path="*" element={<Navigate to={session ? "/user-page" : "/"} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
