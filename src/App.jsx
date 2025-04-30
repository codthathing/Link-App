import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PreviewPage from "./pages/PreviewPage";
import { supabase } from "./database/supabaseClient";
import { NavigateContext } from "./services/NavigateProvider";
import PageUpdate from "./components/ui/PageUpdate";

function App() {
  const { setSession } = useContext(NavigateContext);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session)); /* Check existing session */
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session)); /* Listen for auth changes */

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <PageUpdate />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/preview-page" element={<PreviewPage />} />
          </Route>
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
