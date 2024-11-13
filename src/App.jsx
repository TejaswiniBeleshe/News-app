import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import NewsCards from "./components/NewsCards";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NavBarState from "./context/states/NavBarState";
import TopLoadingBar from "./context/states/TopLoadingBar";
import NavigationBar from "./components/NavigationBar";
import CountryState from "./context/states/CountryState";
import { updateVisitors } from "./components/utility/supabase";
function App() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    updateVisitors();
  }, []);
  return (
    <>
      <TopLoadingBar>
        <CountryState>
          <NavBarState>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />

              <Route
                path="/main"
                element={
                  <div
                    className="main transition duration-200 dark:bg-gray-900"
                    id="swipeElement"
                  >
                    <NewsCards category="general" />
                  </div>
                }
              />
              <Route
                exact
                path="/tech"
                element={
                  <div className="main">
                    <NewsCards category="technology" key={"technology"} />
                  </div>
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <div className="main">
                    <NewsCards category="general" key={"general"} />
                  </div>
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <div className="main">
                    <NewsCards category="science" key={"science"} />
                  </div>
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <div className="main">
                    <NewsCards category="sports" key={"sports"} />
                  </div>
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <div className="main">
                    <NewsCards category="business" key={"business"} />
                  </div>
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <div className="main">
                    <NewsCards category="entertainment" key={"entertainment"} />
                  </div>
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <div className="main">
                    <NewsCards category="health" key={"health"} />
                  </div>
                }
              />
            </Routes>
          </NavBarState>
        </CountryState>
      </TopLoadingBar>
    </>
  );
}

export default App;
