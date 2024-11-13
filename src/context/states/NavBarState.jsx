import React from "react";
import NavBarContext from "../ShowNavBarContext";
import { useState } from "react";

const NavBarState = (props) => {
  const [navBarState, setNavBarState] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("/");
  const updateStateNav = (params) => {
    setNavBarState(params);
  };
  const updateStateRoute = (params) => {
    setCurrentRoute(params);
  };
  return (
    <NavBarContext.Provider
      value={{
        state: navBarState,
        update: updateStateNav,
        currentNavState: currentRoute,
        updateCurrentRoute: updateStateRoute,
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
};

export default NavBarState;
