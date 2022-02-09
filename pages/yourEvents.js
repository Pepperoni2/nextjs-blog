import Head from "next/head";
import { useContext } from "react";
import EnteredEvent from "../components/EnteredEventItem";
import { DataContext } from "../store/GlobalState";
import NavEvents from "../components/NavEvents";
import styles from "../styles/modules/afterlogin/yourEvents.module.scss";
import Footer from "/components/footer";
import { motion, useViewportScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Link from "next/link";
import Image from "next/image";
import { withRouter } from "next/router";
import ScrollToTop from "../components/scrollTop";

const yourEvents = () => {
  const { state, dispatch } = useContext(DataContext);
  const { enteredEvent } = state;

  const [stateTrue, setStateTrue] = useState(false);

  const [heightValue, setHeightValue] = useState(0);

  const toggleVisibility = () => {
    let offset = 0;
    offset = window.pageYOffset;
    if (window.pageYOffset > 20) {
      setHeightValue(1);
    } else {
      setHeightValue(0);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  const { scrollYProgress } = useViewportScroll();

  if (enteredEvent.length === 0) {
    return (
      <div className={styles.backg1}>
        <img src="/noEvents.png" alt="No Events :(" />
        <motion.div className={styles.footer}>
          <Footer></Footer>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <Head>
          <title>Your Events Page</title>
        </Head>
        <div className={styles.backg}>
          <div className={styles.space}></div>

          <NavEvents></NavEvents>
          <div className={styles.space}></div>

          <h3 className={styles.desc}>
            <p>
              Here you can keep track of every event you've entered or already
              participated
            </p>
          </h3>
          <table className={styles.table}>
            <tbody className={styles.tablebody}>
              {enteredEvent.map((event) => (
                <EnteredEvent
                  key={event._id}
                  event={event}
                  dispatch={dispatch}
                  enteredEvent={enteredEvent}
                ></EnteredEvent>
              ))}
            </tbody>
          </table>
        </div>
        <ScrollToTop></ScrollToTop>
        <motion.div className={styles.footer}>
          <Footer></Footer>
        </motion.div>
      </div>
    );
  }
};

export default yourEvents;
