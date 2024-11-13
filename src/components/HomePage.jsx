import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarContext from "../context/ShowNavBarContext";
import TopLoadingContext from "../context/TopLoadContext";
import Typewriter from "typewriter-effect/dist/core";
import Footer from "./Footer";

export default function HomePage() {
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);

  topLoader.update(0);
  topLoader.update(40);
  useEffect(() => {
    topLoader.update(60);
    toggleNavBar.update(false);
    document.title = `Suddi-Samachar`;
  }, []);
  const showBar = () => {
    toggleNavBar.update(true);
    const dropDownEle = document.querySelector(".news-country-drop");
    if (!dropDownEle.classList.contains("hidden")) {
      dropDownEle.classList.toggle("hidden");
    }
  };
  topLoader.update(100);

  new Typewriter(document.getElementById("typewriter"), {
    strings: ["Welcome to Suddi-Samachara!", "You'll get all news here."],
    autoStart: true,
    loop: true,
    delay: 60,
  });

  return (
    <>
      <section className="dark:text-white text-black py-10 relative top-10 dark:bg-gray-900 h-64">
        <div className="container mx-auto text-center p-5">
          <h1 className="text-5xl font-bold">News</h1>
          <p className="mt-4 text-lg">Daily news dose</p>

          <div
            id="typewriter"
            className="text-2xl font-bold overflow-hidden w-50"
          ></div>
        </div>
      </section>
      <div className="relative top-10 flex justify-center">
        <button
          onClick={showBar}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 mt-8 rounded-full"
        >
          <Link to="/main">Fetch News</Link>
        </button>
      </div>
      <section className="py-20 min-w-fit">
        <div className="container mx-auto text-center p-10 ">
          <h2 className="text-3xl dark:text-white font-bold">
            What you'll get
          </h2>
          <p className="mt-4 text-lg dark:text-white">
            Tech-savvy, science-curious, sports-fanatic, health-conscious? Dive
            into today's top headlines across tech, science, sports & health.
            Get informed, stay inspired.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
