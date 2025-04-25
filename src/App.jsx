import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PreviewPage from "./pages/PreviewPage";
import { supabase } from "./database/supabaseClient";

function App() {
  // const [userLinks, setUserLinks] = useState(null);
  // const [orderBy, setOrderBy] = useState("created_at");

  // useEffect(() => {
  //   const fetchUserLinks = async () => {
  //     const { data, error } = await supabase.from("links").select()/* .order(orderBy, { ascending: false }) */ /* .eq("id", id).single(); // to select individual row as a object instead of array based on the id */; 
  //     try {
  //       if (error) {
  //         throw new Error("Unable to get links");
  //       };
  //       setUserLinks(data);
  //     } catch (err) {
  //       console.error(err);
  //     };
  //   }

  //   fetchUserLinks();
  // }, [orderBy]);

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
