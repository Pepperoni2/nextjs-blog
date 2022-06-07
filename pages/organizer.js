import NavigationLeftO from "../components/navigationO_after";
import styles from "../styles/modules/afterlogin/Omain_after.module.scss";
import { getData } from "../util/fetchData";
import { DataContext } from "../store/GlobalState";
import { useContext, useState, useEffect } from "react";
import EventItem from "../components/event/EventItem";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { Component } from "react";
import Footer from "../components/footer";
//import CenterMode from "./Slider";

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
    } else {
      router.push("/");
    }
  }, [auth]);

  return (
    <div className={styles.wrapper}>
      <NavigationLeftO />
      <div className={styles.container}>
        <div className={styles.headline}>
          <h1>Current running Events</h1>
        </div>
        <div className={styles.slider}>
          {events.length === 0 || Object.keys(auth).length === 0 ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.footer}>
          <Footer></Footer>
        </div>
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
