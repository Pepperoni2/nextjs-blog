import styles from "../styles/modules/afterlogin/navEvents.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";


export default function NavEvents(){


  const variantsspan1 = {
    visible: {
      width: "0%",
      opacity: 1,
    },
    hidden: {
      width: ["0%", "2%", "0%"],
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

  return (
    <motion.div
      className={styles.divbackg}
      // style={{ boxShadow: "0 0 6px 1px white"}}
    >
      <motion.div className={styles.divtitle}>
        <motion.h2
          className={styles.title}
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
            <a className={styles.back}>Back</a>
          </Link>
        </motion.h2>
        <motion.span
          className={styles.spantitle}
          initial={"visible"}
          animate={"hidden"}
          variants={variantsspan1}
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};


