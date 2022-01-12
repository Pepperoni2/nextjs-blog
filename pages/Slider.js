import React, { Component } from "react";
import Slider from "react-slick";

export default function CenterMode (props) {
  
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {props.children}
        </Slider>
      </div>
    );
  }
