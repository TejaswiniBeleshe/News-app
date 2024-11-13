import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ActiveRouteState from "./context/states/ActiveRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ActiveRouteState>
      <App />
    </ActiveRouteState>
  </BrowserRouter>
);
