import Link from "next/dist/client/link";
import styles from "../styles/modules/logRegNav.module.scss";
import { motion } from "framer-motion";
function NavLogin(props) {

  const variants = {
    visible: (i) => {
      const delay = 0.1 + i * 0.1;
      return {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        bounce: 0,
        damping: 1,
        duration: 0.3,
      },
    }
    },
    hidden: {
      opacity: 0,
      y: -10,

      transition: {
        y: { delay: 0.6, bounce: 0, damping: 1 },
        opacity: { delay: 0.6 },
      },
    },
  };

  return (
    <motion.div className={styles.wrplhlogin} custom={0} variants={variants} animate={"visible"} initial={"hidden"}>
      <Link href="/">
        <a className={styles.a1}>
        <div className={styles.logologin}> </div>
        </a>
      </Link>

      <Link href="/">
        <a className={styles.link}>EventX <span className={styles.underline}></span></a>
      </Link>
    </motion.div>
  );
}

export default NavLogin;

/* -------------- DELETED CODE ------------

              <Link href="/signin">
                <button className="bt">
                  <a>Login</a>
                </button>
              </Link> */
