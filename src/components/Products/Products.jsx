import React from "react";
import "./Products.scss";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <ul className="product-list glide__slides" id="product-list">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ul>
          </div>
          <div className="glide__arrows">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
