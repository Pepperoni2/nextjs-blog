import Head from "next/head";
import { useContext } from "react";
import EnteredEvent from "../components/EnteredEventItem";
import { DataContext } from "../store/GlobalState";
import styles from "../styles/modules/afterlogin/yourEvents.module.scss";
import Footer from "/components/footer";
import { motion, useViewportScroll} from "framer-motion";
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

  const [stateTrue, setStateTrue]= useState(false);

  
  const [heightValue, setHeightValue] = useState(0);

  const toggleVisibility = () => {
    let offset=0;
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

  const { scrollYProgress } = useViewportScroll()

  const variantsspan1 = {
    visible: {
      width: "0%",
      opacity: 1,
    },
    hidden: {
      width: ["0%", "10%", "0%"],
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
  const variantsspan2 = {
    visible: {
      width: "0%",
      opacity: 1,
    },
    hidden: {
      width: ["0%", "100%",],
      
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
        // transitionEnd: { display: "none"},
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
       
          <motion.div className={styles.divbackg}
          // style={{ boxShadow: "0 0 6px 1px white"}}
         
          >
            
            <motion.div className={styles.divtitle}
            
            >
              
              <motion.h2 className={styles.title}
              // whileInView={{backgroundColor: "rgba(233, 114, 49, 1)",}
              
            //  }
              >
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
              </motion.h2>
              <motion.span
                className={styles.spantitle}
                initial={"visible"}
                animate={"hidden"}
                variants={variantsspan1}
              >
                  
              </motion.span>
            </motion.div>
            {/* <div className={styles.divdesc}>
             
              <motion.span
                className={styles.spandesc}
                initial={"visible"}
                animate={"hidden"}
                variants={variantsspan2}
              ></motion.span>
            </div> */}
          </motion.div>
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
                  
                >

                </EnteredEvent>
              ))}
            </tbody>
          </table>
         
        </div>
        <ScrollToTop></ScrollToTop>
        <motion.div className={styles.footer}
               
        >
            <Footer></Footer>
          </motion.div>
          
      </div>
      
    );
  }
};

export default yourEvents;
