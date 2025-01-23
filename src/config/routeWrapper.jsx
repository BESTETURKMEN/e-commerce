import React from "react";
import { Route, Routes } from "react-router";
import Index from "../layout";
import Home from "../pages/Home";

export default function RouteWrapper() {
  return (
    <div>
      <Routes>
        <Route element={<Index />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
