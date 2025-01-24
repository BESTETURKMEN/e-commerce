import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import RouteWrapper from "./config/routeWrapper";
import MainLayout from "./layout/MainLayout";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainLayout>
      <RouteWrapper />
    </MainLayout>
  </React.StrictMode>
);
reportWebVitals();
