import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import NavBarContext from "../context/ShowNavBarContext";
import LoadingBar from "react-top-loading-bar";
import TopLoadingContext from "../context/TopLoadContext";
import CommonNavBar from "./CommonNavBar";

export default function NavBar() {
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);

  return (
    <>
      <div className="relative">
        <CommonNavBar />
        <LoadingBar color="#f11946" progress={topLoader.state} height={3} />
        {toggleNavBar.state && (
          <div className="news-navbar-sec flex justify-center content-center overflow-x-hidden">
            <div className="mb-0 md:px-10 text-white flex flex-nowrap gap-8 fixed justify-center z-10 sm:top-30 w-1/2 sm:news-navbar-width top-10">
              <nav className="flex md:flex-wrap sm:flex-none sm:justify-between">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/tech"
                >
                  Technology
                </Link>
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/health"
                >
                  Health
                </Link>
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/science"
                >
                  Science
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/sports"
                >
                  Sports
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/business"
                >
                  Business
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
