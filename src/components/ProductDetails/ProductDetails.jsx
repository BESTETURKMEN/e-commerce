import React from "react";

import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Galery from "./Galery/Galery";
import Info from "./Info/Info";
import Tabs from "./Tabs/Tabs";
import "./ProductDetails.scss";

export default function ProductDetails() {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <BreadCrumb />
          <div className="single-content">
            <main className="site-main">
              <Galery />
              <Info />
            </main>
          </div>
          <Tabs />
        </div>
      </div>
    </section>
  );
}
