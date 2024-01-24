import React, { useState } from "react";
import Shop from "./components/shop/shop";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Navigation />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
