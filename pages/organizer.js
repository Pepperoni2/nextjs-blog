import NavigationLeftO from "../components/navigationO_after";
import styles from "../styles/modules/afterlogin/main_after.module.scss";
import { getData } from "../util/fetchData";
import { DataContext } from "../store/GlobalState";
import { useContext, useState, useEffect } from "react";
import EventItem from "../components/event/EventItem";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { slideLogicc } from "./slideLogic";
import React, { Component } from "react";
import CenterMode from "./Slider";

export default function Organizer(props) {
  const router = useRouter();
  const [events, setEvents] = useState(props.events);
  const { state } = useContext(DataContext);
  const { auth } = state;

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      if (auth.user.role === "organizer") {
        router.push("/organizer");
      } else if (auth.user.role === "participator")
        router.push("/participator");
    }
  }, [auth]);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className={styles.wrapper}>
      <NavigationLeftO />
      <div className={styles.container}>
        <section className="sliderReal">
          <Slider {...settings}>
            {events.length === 0 || Object.keys(auth).length === 0 ? (
              <div></div>
            ) : (
              events.map((event) => <EventItem key={event._id} event={event} />)
            )}
            
          
          
          </Slider>
        </section>
      </div>
    </div>
  );
}
// || Object.keys(auth).length === 0
export async function getServerSideProps() {
  const res = await getData("event");
  /*   console.log(res)
   */ // server-side-rendering, console.log() will not be displayed in the browser
  return {
    props: {
      events: res.events,
      result: res.result,
    }, // will be passed to the page component as props
  };
}
