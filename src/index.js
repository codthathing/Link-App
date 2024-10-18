import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './css/main.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style.css";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  </StrictMode>
);