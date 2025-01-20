import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./app/store";

import reportWebVitals from "./reportWebVitals";
import RouteWrapper from "./config/routeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <HashRouter>
        <RouteWrapper />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
