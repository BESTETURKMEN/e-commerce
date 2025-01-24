import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../pages/BlogDetailPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export default function RouteWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Auth" element={<AuthPage />} />
        <Route path="/Card" element={<CartPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Detail" element={<BlogDetail />} />
        <Route path="/ProductDetail" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}
