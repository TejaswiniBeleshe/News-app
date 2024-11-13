import React from "react";
import { useState } from "react";
import RouteContext from "../ActiveRouteContext";

const ActiveRouteState = function (props) {
  const [routeState, setRouteState] = useState("/");
  const updateRouteState = (params) => {
    setRouteState(params);
  };
  return (
    <RouteContext.Provider
      value={{ state: routeState, update: updateRouteState }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default ActiveRouteState;
