import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/main.min.css';
import "./styles/style.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PreviewPage from "./pages/PreviewPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);