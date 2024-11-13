import React from "react";
import TopLoadingContext from "../TopLoadContext";
import { useState } from "react";

const TopLoadingBar = (props) => {
  const [topLoadState, setTopLoadState] = useState(0);
  const updateState = (params) => {
    setTopLoadState(params);
  };
  return (
    <TopLoadingContext.Provider
      value={{ state: topLoadState, update: updateState }}
    >
      {props.children}
    </TopLoadingContext.Provider>
  );
};

export default TopLoadingBar;
