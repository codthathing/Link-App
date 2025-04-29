import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PreviewPage from "./pages/PreviewPage";
import { supabase } from "./database/supabaseClient";

function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => setSession(session)); /* Check existing session */
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session)); /* Listen for auth changes */

  //   return () => subscription.unsubscribe()
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/preview-page" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
