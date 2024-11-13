import React from "react";
import CountryContext from "../CountryContext";
import { useState } from "react";

const CountryState = (props) => {
  const [countryState, setCountryState] = useState("IN");
  const [newsData, setNewsData] = useState([]);
  const [logo, setLogo] = useState("/src/assets/india.svg");
  const [isLoading, setLoader] = useState(true);
  const [countryModal, setCountryModal] = useState(false);
  const updateCountryState = (params) => {
    setCountryState(params);
  };
  const updateNewsData = (params) => {
    setNewsData(params);
  };
  const updateCountryLogo = (params) => {
    setLogo(params);
  };
  const updateLoaderSate = (params) => {
    setLoader(params);
  };
  const updateCountryModal = (params) => {
    setCountryModal(params);
  };
  return (
    <CountryContext.Provider
      value={{
        state: countryState,
        update: updateCountryState,
        setData: updateNewsData,
        allNewsData: newsData,
        countryLogo: logo,
        updateLogo: updateCountryLogo,
        loaderState: isLoading,
        updateLoad: updateLoaderSate,
        modalState: countryModal,
        modalUpdate: updateCountryModal,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
