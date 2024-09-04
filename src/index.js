import React from "react";
import ReactDOM from "react-dom";
import './css/main.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/home";


const Default = () => {

  return (
    <Home></Home>
  );
}

ReactDOM.render(<Default/>, document.getElementById("root"));