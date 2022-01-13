import React, { Component } from "react";
import { ReactDOM } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default class CenterMode extends Component {
  render () {
  


  const settings = {
    className: "slide",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 10,
    centerMode: true,
    centerPadding: 0,
   arrows:true
  };
  return (
    <>
      <Slider {...settings}><div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div></Slider>
    </>
  );
}
}