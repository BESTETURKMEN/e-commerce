import React from "react";
import "./Category-item.scss";

export default function CategoriesItem() {
  return (
    <div>
      <li className="category-item">
        <a href="#">
          <img
            src="img/categories/categories1.png"
            alt=""
            className="category-image"
          />
          <span className="category-title">Smartphone</span>
        </a>
      </li>
    </div>
  );
}
