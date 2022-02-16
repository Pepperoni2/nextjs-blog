import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/modules/scrollTop.module.scss";
import { IconName, HiOutlineChevronUp } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ScrollToTop(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [scaleValue, setScaleValue] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
      setScaleValue(1);
    } else {
      setIsVisible(false);
      setScaleValue(0);
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
    //console.log(scaleValue);
  }, [isVisible]);

  return (
    <div className={styles.divscroll}>
      {isVisible ? (
        <motion.span
          className={styles.scrolltotop}
          style={{transform:  `scale(${scaleValue})`}}
        >
          <HiOutlineChevronUp onClick={scrollToTop} />
        </motion.span>
      ) : (
        <motion.span
          className={styles.scrolltotop}
          style={{transform:  `scale(${scaleValue})`}}
        >
          <HiOutlineChevronUp onClick={scrollToTop} />
        </motion.span>
      )}
    </div>
  );
}
