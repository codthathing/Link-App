import React from "react";
import ReactDOM from "react-dom";
import './css/main.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style.css";
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";


const Default = () => {

  return (
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  );
}

ReactDOM.render(<Default />, document.getElementById("root"));