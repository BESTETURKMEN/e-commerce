import React from "react";
import { Route, Routes } from "react-router";
import Index from "../layout";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../pages/BlogDetailPage";

export default function RouteWrapper() {
  return (
    <div>
      <Routes>
        <Route element={<Index />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<ShopPage />} /> */}
          {/* <Route path="/" element={<ContactPage />} /> */}
          {/* <Route path="/" element={<AuthPage />} /> */}
          {/* <Route path="/" element={<CartPage />} /> */}
          {/* <Route path="/" element={<BlogPage />} /> */}
          <Route path="/" element={<BlogDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
