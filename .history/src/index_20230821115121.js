import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";

import { HashRouter } from "react-router-dom";

import { store } from "./features/store";

import reportWebVitals from "./reportWebVitals";
import RouteWrapper from "./config/routeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouteWrapper />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
