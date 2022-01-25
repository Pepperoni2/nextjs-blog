import Head from "next/head";
import styles from "../../../styles/modules/distributor.module.scss";
import Link from "next/link";
import NavLogin from "../../../components/header-login";
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";
import { motion, useAnimation } from "framer-motion";
import { get } from "jquery";
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import Footer from "../../../components/footer";
import { id } from "date-fns/locale";
import ScrollToTop from "../../../components/scrollTop";

export default function Distributor(params, props) {
  const style = { color: "white", fontSize: "1.5em" };
  const slidess = useAnimation();
  const controls = useAnimation();

  const ani = {
    hidden: {
      scale: 1,
      opacity: 0,
      x: -200,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
  const slide = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  useEffect(() => {
    controls.set({ opacity: 0, x: 50 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }));

 
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 1,
          opacity: 0,
          y: -200,
        },
        visible: {
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <div className={styles.bwrap}>
            <motion.h1 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}>
              Choose
            </motion.h1>
            <div className={styles.flexbwrap}>
              <Link href="/login/distributor/o-register">
                <a>
                  <motion.span
                    className={styles.chbt}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h3>Organizer</h3>
                    <GiAries className={styles.icons} />
                    <div className={styles.backg}></div>
                  </motion.span>
                </a>
              </Link>

              <Link href="/login/distributor/p-register">
                <a>
                  <motion.span
                    className={styles.chbt}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h3>Participator</h3>
                    <GiAzulFlake className={styles.icons} />
                    <div className={styles.backg}></div>
                  </motion.span>
                </a>
              </Link>
            </div>
            <p className={styles.inptext} id="text">
              <h1>What's the difference?</h1>
              <motion.div
                className={styles.textdiv}
                custom={1}
                animate={controls}
              >
                <h3>Organizers</h3>
                have the ability to create and to organize your own events or
                parties.
              </motion.div>

              <motion.div
                className={styles.textdiv}
                custom={2}
                animate={controls}
              >
                <h3>Participators</h3>
                have the ability to join an event. With that it is possible to
                see any specific data related to the event.

              </motion.div>
              <motion.div
                className={styles.textdiv}
                custom={3}
                animate={controls}
              >
                <h3>Additional information</h3>
                Qui excepteur excepteur esse consectetur non. Mollit excepteur
                id aliqua voluptate aliqua consectetur consectetur. Eu deserunt
                ipsum culpa Lorem excepteur ad ut aliqua magna ex adipisicing
                do. Commodo esse consequat nostrud aute sunt qui ut pariatur ad
                anim ad dolore nostrud. Laborum magna incididunt aute magna duis
                deserunt ut duis ipsum nisi consectetur laboris sunt.
              </motion.div>
              
                <ScrollToTop></ScrollToTop>
             
              
            </p>
          </div>
        </div>

        <motion.div className={styles.footer}>
          <Footer></Footer>
        </motion.div>
      </div>
    </motion.div>
  );
}
