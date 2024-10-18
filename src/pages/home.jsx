import { Route, Routes } from "react-router-dom";
import Login from "./login/login";
import SignUp from "./signup/signup";
import Preview from "./preview/preview";

const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/preview" element={<Preview />}></Route>
    </Routes>
  );
}

export default Home;