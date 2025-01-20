import React from "react";
import { Route, Routes } from "react-router";

import Index from "../layout";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";

export default function RouteWrapper() {
  return (
    <div>
      <Routes>
        <Route element={<Index />}>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Route>
      </Routes>
    </div>
  );
}
