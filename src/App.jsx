import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PreviewPage from "./pages/PreviewPage";

function App() {

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
