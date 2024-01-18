import React from "react";
import Window from "./components/shop/window";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Window />} />
      </Routes>
      <Link to="/signIn">
        <Icon.PersonCircle
          color="grey"
          size={60}
          className="bg-[white] rounded-[50%] border-gray border-solid border-1 fixed top-[20px] right-[20px] shadow-md"
        />
      </Link>
    </div>
  );
}

export default App;
