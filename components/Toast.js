import styles from "../styles/modules/toast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ msg, handleShow, titleColor }) => {



  return (
    
    <motion.div className={styles.toast} initial={{opacity: 0, y: -40}} animate={{opacity: 1, y:0}}
    transition={{ ease: "easeInOut", duration: 0.4, delayChildren: 0.5}}  exit={{ opacity: 0, x:-40 }}
    >
      <strong className={styles.title} style={{color: titleColor}}>{msg.title}</strong>

      <button
        type="button"
        className={styles.button}
        style={{ outline: "none" }}
        onClick={handleShow}
      >
        &#10005;
      </button>

      <motion.div className={styles.message}
      initial={{opacity: 0, y: 0}} animate={{opacity: 1, y:0}}
      transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      >{msg.msg}</motion.div>
    </motion.div>
    
  );
};

export default Toast;
