import React, { useContext } from "react";
import { useEffect } from "react";
import { trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NewsCard from "./NewsCard";
import NavBarContext from "../context/ShowNavBarContext";
import TopLoadingContext from "../context/TopLoadContext";
import CountryContext from "../context/CountryContext";
import filterData from "./utility/utility";
import ScrolltoTop from "./ScrolltoTop";
import Spinner from "./Spinner";
import Footer from "./Footer";
import { fetchDataFromSupabase } from "./utility/supabase";

const NewsCards = function ({ category }) {
  const toggleNavBar = useContext(NavBarContext);
  const topLoadBar = useContext(TopLoadingContext);
  const countryData = useContext(CountryContext);
  topLoadBar.update(0);
  console.log(toggleNavBar, "toggleNavBar-------");
  document.title = `Suddi-Samachar - ${
    category.charAt(0).toUpperCase() + category.slice(1)
  }`;
  useEffect(function () {
    countryData.updateLoad(true);
    const ele = document.querySelectorAll(".news-list li").forEach((ele) => {
      console.log(ele, "elements");

      ele.addEventListener("click", (e) => {
        const allLiEle = document.querySelectorAll(".news-list li");
        allLiEle.forEach((ele) => {
          ele.classList.remove("bg-gray-300");
          ele.classList.remove("rounded");
          ele.classList.remove("h-6");
        });
        e.target.parentElement.classList.add("bg-gray-300");
        e.target.parentElement.classList.add("rounded");
        e.target.parentElement.classList.add("h-6");
      });
    });
    console.log(ele, "Lists");
    const fetchData = async () => {
      await getCountries();
      countryData.updateLoad(false);
    };
    toggleNavBar.update(true);
    fetchData();

    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);
    topLoadBar.update(80);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  topLoadBar.update(100);

  async function getCountries() {
    topLoadBar.update(60);
    let tableName;

    if (countryData.state.toLowerCase() === "in") {
      tableName = "India_duplicate";
    } else if (countryData.state.toLowerCase() === "us") {
      tableName = "USA_duplicate";
    } else if (countryData.state.toLowerCase() === "fr") {
      tableName = "France_duplicate";
    } else if (countryData.state.toLowerCase() === "ch") {
      tableName = "China_duplicate";
    }
    if (category.toLowerCase() === "general") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);
      return;
    }
    if (category.toLowerCase() === "science") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
    if (category.toLowerCase() === "sports") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
    if (category.toLowerCase() === "entertainment") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
    if (category.toLowerCase() === "business") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
    if (category.toLowerCase() === "health") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
    if (category.toLowerCase() === "technology") {
      const supabaseData = await fetchDataFromSupabase(category, tableName);
      const filteredData = await filterData(supabaseData, category);
      countryData.setData(filteredData);

      return;
    }
  }
  return (
    <>
      {countryData.loaderState ? (
        <Spinner />
      ) : (
        <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col relative top-20 custom-scrollbar max-h-full">
          <div className="mb-auto px-5 py-10 md:py-20 md:px-10 mt-10">
            <div className="mb-20 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <ScrolltoTop />
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
                  {countryData.allNewsData.map((ele) => {
                    // console.log(ele, "got it");
                    return (
                      <>
                        {ele
                          ? ele.map((eachEle, index) => {
                              let filteredData = {};

                              if (
                                eachEle.title &&
                                eachEle.author &&
                                eachEle.urlToImage &&
                                eachEle.source.name &&
                                eachEle.url
                              ) {
                                filteredData = {
                                  title: eachEle.title,
                                  author: eachEle.author,
                                  content: eachEle.content,
                                  urlToImage: eachEle.urlToImage,
                                  source: eachEle.source.name,
                                  url: eachEle.url,
                                };
                              }
                              return (
                                <div className="">
                                  <NewsCard data={eachEle} key={index} />
                                </div>
                              );
                            })
                          : ""}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default trackWindowScroll(NewsCards);
