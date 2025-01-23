import React from "react";
import Header from "../layout/header";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/Campaign-Single/CampaignSingle";
import Policy from "../layout/policy";
import Footer from "../layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Footer />
    </>
  );
}
