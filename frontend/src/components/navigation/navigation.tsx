import { useNavigate, Link, useLocation } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import React, { useState } from "react";
import data from "../../data/data";

export default function Navigation() {
  const [menuClick, setMenuClick] = useState<any>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuClick(!menuClick);
  };

  const handleTab = (e: any) => {
    data.map((tab) => {
      tab.picked = false;
      data[parseInt(e.target.id) - 1].picked = true;
    });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setMenuClick(!menuClick);
    navigate("/");
    data.map((tab) => {
      tab.picked = false;
    });
    data[0].picked = true;
  };

  return (
    <>
      <button onClick={handleMenu}>
        <Icon.PersonCircle
          color="grey"
          size={60}
          className="bg-[white] rounded-[50%] border-gray border-solid border-1 shadow-md ml-[75vw] mt-[-15vh] lg:ml-[90vw]"
        />
      </button>
      <div>
        {localStorage.getItem("name") ? (
          <div
            className={`${
              menuClick ? "" : "hidden"
            } fixed top-[120px] right-[30px] shadow-md bg-[white] p-3 rounded-[5px] flex flex-col z-2`}
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
            } fixed top-[90px] right-[20px] shadow-md bg-[white] p-3 rounded-[5px] flex flex-col z-2`}
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
        <div className="h-[8vh] w-[90vw] lg:w-[40vw] mb-[-20px] flex">
          {location.pathname != "/signIn" &&
            location.pathname != "/signUp" &&
            data.map((tab) => {
              return (
                <Link
                  onClick={handleTab}
                  to={tab.link}
                  key={tab.id}
                  id={tab.id.toString()}
                  className={`${
                    tab.picked
                      ? "bg-[#2f22a4] text-white translate-y-[-1vh] hover:bg-[#4578d3] "
                      : "bg-[#baddf2] hover:bg-[#a2d2ef]"
                  } rounded w-full text-center pt-[5px] shadow-md trasnsition-all duration-[500ms] no-underline text-slate-700`}
                >
                  {/* переделать текст в картинки */}
                  {tab.title}
                </Link>
              );
            })}
        </div>

        {/*  */}
      </div>
    </>
  );
}
