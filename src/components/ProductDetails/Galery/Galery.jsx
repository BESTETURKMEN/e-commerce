import React from "react";
import "./Galery.scss";

export default function Galery() {
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img
          src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
          alt=""
        />
      </div>
      <div className="product-thumb">
        <div className="glide__track">
          <ol className="gallery-thumbs glide__slides">
            <li className="glide__slide glide__slide--active">
              <img
                src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
                alt=""
                className="img-fluid active"
              />
            </li>
            <li className="glide__slide">
              <img
                src="https://e-commerce-udemy.netlify.app/img/products/product2/2.png"
                alt=""
                className="img-fluid"
              />
            </li>
            <li className="glide__slide">
              <img
                src="https://e-commerce-udemy.netlify.app/img/products/product2/3.png"
                alt=""
                className="img-fluid"
              />
            </li>
          </ol>
        </div>
        <div className="glide__arrows">
          <button className="glide__arrow glide__arrow--left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
