import React from "react";
import "./ProductItem.scss";

export default function ProductItem() {
  return (
    <div>
      <li className="product-item glide__slide glide__slide--active">
        <div className="product-image">
          <a href="#">
            <img
              src="https://e-commerce-udemy.netlify.app/img/products/product1/1.png"
              alt=""
              className="img1"
            />
            <img
              src="https://e-commerce-udemy.netlify.app/img/products/product1/2.png"
              alt=""
              className="img2"
            />
          </a>
        </div>
        <div className="product-info">
          <a href="$" className="product-title">
            Analogue Resin Strap
          </a>
          <ul className="product-star">
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-half"></i>
            </li>
          </ul>
          <div className="product-prices">
            <strong className="new-price">$108.00</strong>
            <span className="old-price">$165.00</span>
          </div>
          <span className="product-discount">-22%</span>
          <div className="product-links">
            <button className="add-to-cart">
              <i className="bi bi-basket-fill"></i>
            </button>
            <button>
              <i className="bi bi-heart-fill"></i>
            </button>
            <a href="#" className="product-link">
              <i className="bi bi-eye-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </li>
    </div>
  );
}
