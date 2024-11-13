import React from "react";
import Switcher from "./DarkModeSwitcher";
import { Link, useLocation } from "react-router-dom";
import CountryContext from "../context/CountryContext";
import India from "./country/India";
import China from "./country/China";
import Usa from "./country/Usa";
import France from "./country/France";
import { useState, useContext } from "react";
import filterData from "./utility/utility";
import { fetchDataFromSupabase } from "./utility/supabase";

export default function CommonNavBar() {
  const countryCon = useContext(CountryContext);
  const location = useLocation();
  const changeCountry = (e) => {
    const dropDownEle = document.querySelector(".news-country-drop");
    const navbarEle = document.querySelector(".nw-bar");
    if (navbarEle) {
      if (dropDownEle.classList.contains("hidden")) {
        dropDownEle.classList.remove("hidden");
        navbarEle.classList.add("hidden");
      } else {
        dropDownEle.classList.add("hidden");
      }
      countryCon.modalUpdate(true);
    } else {
      if (dropDownEle.classList.contains("hidden")) {
        dropDownEle.classList.remove("hidden");
      } else {
        dropDownEle.classList.add("hidden");
      }
    }
  };

  const selectCountry = async (e) => {
    let tableName, currentColumn;
    let selectedCountry;
    if (e.target.getAttribute("data-country")) {
      selectedCountry = e.target.getAttribute("data-country");
    }
    if (e.target.textContent) {
      selectedCountry = e.target.textContent;
    }
    countryCon.updateLoad(true);
    countryCon.update(selectedCountry);
    const path = location.pathname;

    switch (path) {
      case "/main":
        currentColumn = "general";
        break;
      case "/tech":
        currentColumn = "technology";
        break;
      case "/science":
        currentColumn = "science";
        break;
      case "/sports":
        currentColumn = "sports";
        break;
      case "/business":
        currentColumn = "business";
        break;
      case "/entertainment":
        currentColumn = "entertainment";
        break;
      case "/health":
        currentColumn = "health";
        break;
      default:
        currentColumn = "general";
        break;
    }

    switch (selectedCountry.toLowerCase()) {
      case "in":
        tableName = "India_duplicate";
        break;
      case "us":
        tableName = "USA_duplicate";
        break;
      case "ch":
        tableName = "China_duplicate";
        break;
      case "fr":
        tableName = "France_duplicate";
        break;
      default:
        tableName = "India_duplicate";
        break;
    }
    const dropDownEle = document.querySelector(".news-country-drop");
    const navbarEle = document.querySelector(".nw-bar");

    dropDownEle.classList.toggle("hidden");
    if (navbarEle) {
      navbarEle.classList.remove("hidden");
    }

    if (path !== "/") {
      const supabaseData = await fetchDataFromSupabase(
        currentColumn,
        tableName
      );
      const filteredData = await filterData(supabaseData, currentColumn);
      countryCon.setData(filteredData);
      countryCon.updateLoad(false);
    }
  };

  return (
    <nav className="border-gray-200 bg-back transition duration-200 dark:bg-gray-900 fixed top-0 z-10 p-2">
      <div className="w-screen h-500 flex flex-wrap items-center justify-between content-center p-5 mx-auto max-w-12xl px-2 sm:px-6 lg:px-8 news-navbar">
        <div className="flex left-0 items-center ml-0">
          <Link className="flex items-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-newspaper h-8 w-8 dark:text-white text-gray-900 nw-logo"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
          </Link>
        </div>
        <div className="relative flex items-center md:order-4 w-200 px-1 nw-logo">
          <Switcher />
          <div className="w-24">
            <button
              onClick={changeCountry}
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="w-max inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900  rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            >
              {countryCon.state === "IN" ? (
                <India />
              ) : countryCon.state === "US" ? (
                <Usa />
              ) : countryCon.state === "CH" ? (
                <China />
              ) : (
                <France />
              )}
              {countryCon.state}
            </button>
          </div>
          <div
            className="news-country-drop absolute z-50 top-[15px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
            id="language-dropdown-menu"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400  dark:hover:text-gray-800"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <India />
                    IN
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-800"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <Usa />
                    US
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-800"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <China />
                    CH
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-800"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <France />
                    FR
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
