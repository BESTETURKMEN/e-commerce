import React from "react";
import "./BreadCrumb.scss";

export default function BreadCrumb() {
  return (
    <div class="single-topbar">
      <nav class="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Pants</a>
          </li>
          <li>Basic Colored Sweatpants With Elastic Hems</li>
        </ul>
      </nav>
    </div>
  );
}
