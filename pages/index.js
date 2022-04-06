import React from "react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Nav from "/components/navigation";
import Footer from "/components/footer";
import Header1 from "/components/head";
import video from "/Vids/Concert_1630.mp4";
import Header from "/components/head";
import ScrollToTop from "../components/scrollTop";
import styles from "../styles/modules/styles.module.scss";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  useViewportScroll,
} from "framer-motion";

export default function Home() {
  const organzierDesc =
    "As an Organizer you have the ability to create and to organize your own events or parties.";
  
    const participatorDesc =
    "As an Participator you have the ability to join an event. With that it is possible to see any specific data related to the event.";

    const handleScrollY = () => {
    // if (window.pageYOffset > window.innerHeight)
    // {
    //   document.body.style.overflow = "hidden";
    // }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    const burger = document.querySelector(".wrpbt-div");
    const navLinks = document.querySelectorAll("#flexPop button");
    const Lines = document.querySelector(".backg");
    const body = document.querySelector("body");
  });
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.1, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.1, duration: 0.01 },
      },
    },
  };

  const headLineOrg = {
    visible: (i) => {
      const delay = 0.3 + i * 0.1;
      return {
        opacity: 1,
        x: 0,
        transition: {
          opacity: { delay, duration: 0.01 },
          x: { delay, bounce: 300, duration: 0.2 },
        },
      };
    },
    hidden: { opacity: 0, x: 30 },
  };
  const headLinePart = {
    visible: (i) => {
      const delay = 0.3 + i * 0.1;

      return {
        opacity: 1,
        y: 0,
        transition: {
          opacity: { delay, duration: 0.01 },
          y: { delay, bounce: 300, duration: 0.2 },
        },
      };
    },
    hidden: { opacity: 0, y: 20 },
  };
  const x = useMotionValue(10);
  const y = useTransform(x, (value) => value * 2);

  const backChange = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <div className={styles.wrapper}>
      <Header1 />

      <Nav />
      <main className={styles.main}>
        <div className={styles.mainbackgr}></div>
        <video autoPlay muted loop src={video} />

        <div className={styles.pdiv}>
          <div className={styles.phelp}>
            <p className={styles.p1}>
              Start <strong> now</strong>!
            </p>
          </div>
          <div className={styles.flexbt}>
            <Link href="/login/distributor">
              <button className={styles.btMehr}>Click here</button>
            </Link>
          </div>
        </div>
        <div className={styles.divarrow}>
          <span className={styles.arrow}></span>
        </div>
      </main>

      <div className={styles.informationOrg}>
        {/* <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className={styles.svg}
        >
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
          />
        </motion.svg> */}

        <motion.div
          className={styles.helper}
          initial={{ scaleX: 0.95 }}
          animate={{ scaleX: 1 }}
          transition={{
            scaleX: { delay: 0.5 },
          }}
        >
          <div className={styles.headOrg}>
            <motion.h1
              custom={1}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView={"visible"}
              className="org1"
              viewport={{ once: true }}
            >
              O
            </motion.h1>
            <motion.h1
              custom={2}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              r
            </motion.h1>
            <motion.h1
              custom={3}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              g
            </motion.h1>
            <motion.h1
              custom={4}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              a
            </motion.h1>
            <motion.h1
              custom={5}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              n
            </motion.h1>
            <motion.h1
              custom={6}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              i
            </motion.h1>
            <motion.h1
              custom={7}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              z
            </motion.h1>
            <motion.h1
              custom={8}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              e
            </motion.h1>
            <motion.h1
              custom={9}
              variants={headLineOrg}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              r
            </motion.h1>
          </div>
          <div className={styles.headOrg1}>
            <motion.div
              className={styles.flex1}
              transition={{ x: { delay: 0.7 }, opacity: { delay: 0.1 } }}
              whileInView={{ opacity: 1, x: "3vw" }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p
                transition={{
                  x: { delay: 0.7 },
                  y: { delay: 0.7 },
                  opacity: { delay: 0.1 },
                }}
                whileInView={{ opacity: 1, x: "3vh" }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                viewport={{ once: true }}
                style={{ backChange }}
              >
                {organzierDesc}{" "}
              </motion.p>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              className={styles.flex2}
              transition={{
                x: { delay: 0.7 },
                y: { delay: 0.7 },
                opacity: { delay: 0.1 },
              }}
              whileInView={{ opacity: 1, x: "-3vw", y: "3vh" }}
              initial={{ opacity: 0, x: 0, y: 0 }}
            >
              <div></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className={styles.informationPart}>
        {/* <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className={styles.svg}
        >
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
          />
        </motion.svg> */}

        <motion.div
          className={styles.helper1}
          initial={{ scaleY: 0.95 }}
          animate={{ scaleY: 1 }}
          transition={{
            scaleY: { delay: 0.5 },
          }}
        >
          <motion.div
            className={styles.headPart}
            whileInView={{ x: "-3vw" }}
            initial={{ width: "97%" }}
            transition={{
              x: { delay: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <motion.h1
              custom={1}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              P
            </motion.h1>
            <motion.h1
              custom={2}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              a
            </motion.h1>
            <motion.h1
              custom={3}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              r
            </motion.h1>
            <motion.h1
              custom={4}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              t
            </motion.h1>
            <motion.h1
              custom={5}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              i
            </motion.h1>
            <motion.h1
              custom={6}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              c
            </motion.h1>
            <motion.h1
              custom={7}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              i
            </motion.h1>
            <motion.h1
              custom={8}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              p
            </motion.h1>
            <motion.h1
              custom={9}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              a
            </motion.h1>
            <motion.h1
              custom={10}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              t
            </motion.h1>
            <motion.h1
              custom={11}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              o
            </motion.h1>
            <motion.h1
              custom={12}
              variants={headLinePart}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              r
            </motion.h1>
          </motion.div>
          <div className={styles.headOrg1}>
            <motion.div
              viewport={{ once: true }}
              className={styles.flex3}
              transition={{
                x: { delay: 0.7 },
                y: { delay: 0.7 },
                opacity: { delay: 0.1 },
              }}
              whileInView={{ opacity: 1, x: "3vw", y: "3vh" }}
              initial={{ opacity: 0, x: 0, y: 0 }}
            >
              <div></div>
            </motion.div>
            <motion.div
              className={styles.flex4}
              transition={{ x: { delay: 0.7 }, opacity: { delay: 0.1 } }}
              whileInView={{ opacity: 1, x: "-3vw" }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p
                transition={{
                  x: { delay: 0.7 },
                  y: { delay: 0.7 },
                  opacity: { delay: 0.1 },
                }}
                whileInView={{ opacity: 1, x: "8vw" }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                viewport={{ once: true }}
                style={{ backChange }}
              >
                {participatorDesc}{" "}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* <div className={styles.test}>
      <span className={styles.test2}>1</span>
      <span className={styles.test2}>2</span>
      <span className={styles.test2}>3</span>
    </div> */}
      <ScrollToTop></ScrollToTop>
      {/* <div className={styles.parallax}>
        <div className={styles.more}>
          <h1>Yo Mama Joke</h1>
          <p></p>
        </div>
      </div> */}
      <div className={styles.footer1}>
        <Footer />
      </div>
    </div>
  );
}
