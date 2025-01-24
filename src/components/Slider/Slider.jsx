import React from "react";
import "./Slider.scss";
import { Button, Carousel } from "antd";

export default function Slider() {
  return (
    <Carousel arrows infinite={false}>
      <div className="slider-item fade">
        <img
          src="https://e-commerce-udemy.netlify.app/img/slider/slider1.jpg"
          alt=""
          className="img-fluid"
        />
        <div className="container">
          <p className="slider-title">SUMMER 2022</p>
          <h2 className="slider-heading">Save up to 70%</h2>
          <Button type="primary">Explore Now</Button>
        </div>
      </div>
      <div className="slider-item fade">
        <img
          src="https://e-commerce-udemy.netlify.app/img/slider/slider2.jpg"
          className="img-fluid"
          alt=""
        />

        <div className="container">
          <p className="slider-title">SUMMER 2022</p>
          <h2 className="slider-heading">Save up to 70%</h2>
          <Button type="primary">Explore Now</Button>
        </div>
      </div>
      <div className="slider-item fade">
        <img
          src="https://e-commerce-udemy.netlify.app/img/slider/slider3.jpg"
          className="img-fluid"
          alt=""
        />

        <div className="container">
          <p className="slider-title">SUMMER 2022</p>
          <h2 className="slider-heading">Save up to 70%</h2>
          <Button type="primary">Explore Now</Button>
        </div>
      </div>
    </Carousel>
  );
}
