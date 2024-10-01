import React from "react";
import Login from "./login/login";
import SignUp from "./signup/signup";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
  );
}

export default Home;