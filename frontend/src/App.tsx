import React, { useState } from "react";
import Window from "./components/shop/window";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Profile from "./components/profile/Profile";

function App() {
  const [menuClick, setMenuClick] = useState<any>(false);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuClick(!menuClick);
  };

  const handleSignOut = () => {
    localStorage.clear();
    setMenuClick(!menuClick);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Window />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      <button onClick={handleMenu}>
        <Icon.PersonCircle
          color="grey"
          size={60}
          className="bg-[white] rounded-[50%] border-gray border-solid border-1 fixed top-[20px] right-[20px] shadow-md"
        />
      </button>

      {localStorage.getItem("name") ? (
        <div
          className={`${
            menuClick ? "" : "hidden"
          } fixed top-[90px] right-[20px] shadow-md bg-[white] p-3 rounded-[5px] flex flex-col`}
        >
          <Link
            to="/profile"
            className="no-underline text-[black]"
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          >
            Profile
          </Link>
          <hr className={menuClick ? "" : "hidden"} />
          <button onClick={handleSignOut} className="text-danger">
            Sign Out
          </button>
        </div>
      ) : (
        <div
          className={`${
            menuClick ? "" : "hidden"
          } fixed top-[90px] right-[20px] shadow-md bg-[white] p-3 rounded-[5px] flex flex-col`}
        >
          <Link
            to="/signIn"
            className="no-underline text-[black]"
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          >
            Log In
          </Link>
          <hr />
          <Link
            to="/signUp"
            className="no-underline text-[black]"
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
