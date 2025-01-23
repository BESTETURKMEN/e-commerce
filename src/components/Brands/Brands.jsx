import React from "react";
import "./Brands.scss";
import BrandsItem from "./BrandsItem";

export default function Brands() {
  return (
    <section class="brands">
      <div class="container">
        <ul class="brand-list">
          <BrandsItem />
          <BrandsItem />
          <BrandsItem />
          <BrandsItem />
          <BrandsItem />
          <BrandsItem />
        </ul>
      </div>
    </section>
  );
}
