import React from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/Campaign-Single/CampaignSingle";

export default function ShopPage() {
  return (
    <>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </>
  );
}
