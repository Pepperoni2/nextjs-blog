import React, { Component, useContext } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { DataContext } from "../store/GlobalState";

export default function CenterMode(props) {
  
      const [event] = useState(props.event);
      const { state, dispatch } = useContext(DataContext);
      const { auth, enteredEvent } = state;
   

    const settings = {
      customPaging: function(i) {
        return (
          <a>
             <img src={event.images[0].url} alt={event.images[0].url} style={{height:"100%", width: "100%", objectFit: "cover" }}/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          
          {event.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.url}
                  style={{ height: "80px", width: "20%" }}
                />
              ))}
        </Slider>
      </div>
    );
  }
  export async function getServerSideProps() {
    const res = await getData();
    console.log(res);
    // server-side-rendering, console.log() will not be displayed in the browser
    return {
      props: { event: res.event }, // will be passed to the page component as props
    };
  }
