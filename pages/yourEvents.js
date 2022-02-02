import Head from "next/head";
import { useContext } from "react";
import EnteredEvent from "../components/EnteredEventItem";
import { DataContext } from "../store/GlobalState";
import styles from "../styles/modules/afterlogin/yourEvents.module.scss";
import Footer from "/components/footer";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Link from "next/link";
const yourEvents = () => {
  const { state, dispatch } = useContext(DataContext);
  const { enteredEvent } = state;

  const variantsspan = {
    visible: {
      width: "0%",
      opacity: 1,
    },
    hidden: {
      width: ["0%", "30%", "10%", "100%"],
      //   opacity: [1, 1, 1, 0,1],
      transition: {
        width: {
          //   repeat: Infinity,
          type: "tweet",
          delay: 0.3,
          duration: 2,
          //   velocity: 5,
          restDelta: 0.5,
        },
      },
      //  transitionEnd: { display: "none" },
    },
  };

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
          <div className={styles.divbackg}>
            <div className={styles.divtitle}>
              <h2 className={styles.title}>
                  <div className={styles.div}>
                <Link href="/">
                  <a className={styles.atag}>
                    <div className={styles.logo1}></div>
                  </a>
                </Link>
                <p>Your Events</p>
                </div>
                <Link href="/participator">
                  <a className={styles.back}>
                   Back
                  </a>
                </Link>
              </h2>
              <motion.span
                className={styles.spantitle}
                initial={"visible"}
                animate={"hidden"}
                variants={variantsspan}
              >
                  
              </motion.span>
            </div>
            <div className={styles.divdesc}>
              <h3 className={styles.desc}>
                Here you can keep track of every event you've entered or already
                participated
              </h3>
              <motion.span
                className={styles.spandesc}
                initial={"visible"}
                animate={"hidden"}
                variants={variantsspan}
              ></motion.span>
            </div>
          </div>
          <table className={styles.table}>
            <tbody className={styles.tablebody}>
              {enteredEvent.map((event) => (
                <EnteredEvent
                  key={event._id}
                  event={event}
                  dispatch={dispatch}
                  enteredEvent={enteredEvent}
                />
              ))}
            </tbody>
          </table>
          <motion.div className={styles.footer}>
            <Footer></Footer>
          </motion.div>
        </div>
      </div>
    );
  }
};

export default yourEvents;
