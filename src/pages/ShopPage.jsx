import React from "react";
import Header from "../layout/header";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/Campaign-Single/CampaignSingle";
import Policy from "../layout/policy";
import Footer from "../layout/footer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Footer />
    </>
  );
}
