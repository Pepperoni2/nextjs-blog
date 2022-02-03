import styles from "../../styles/modules/afterlogin/eventitems_after.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToEnteredEvents } from "../../store/Actions";
import { motion } from "framer-motion";
import { set } from "date-fns";
import { tr } from "date-fns/locale";



const EventItem = ({ event }) => {
  const { state, dispatch } = useContext(DataContext);
  const { enteredEvent } = state;
  /*     dispatch({type: 'NOTIFY', payload: {success: 'You have successfully entered "'+ event.title + '"'}})
   */ // ----- The Buttons under the desc ----
  const enter = () => {
    const ent = dispatch(addToEnteredEvents(event, enteredEvent));
    if (!ent)
      dispatch({
        type: "NOTIFY",
        payload: {
          success: 'You have successfully entered "' + event.title + '"',
        },
      });
    ent === false;
  };

  const variantsTitle = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          delay: 0.5,
        },
        opacity: {
          delay: 0.5,
        },
      },
    },
    hidden: { opacity: 0, y: "-100" },
  };
  
  const variantsDesc = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        bounce: 0,
        // velocity: 2 ,
      },
    },
    closed: {
      opacity: 0,
      y: 0,
     
      transition: {
        y: {
          delay: 0.1,
        },
        opacity: {
          delay: 0.1,
        },
      },
    },
  };
  const variantsButtons = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        bounce: 0,
        // velocity: 2 ,
      },
    },
    closed: {
      opacity: 0,
      y: 0,
     
      transition: {
        y: {
          delay: 0.1,
        },
        opacity: {
          delay: 0.1,
        },
      },
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  const userLink = () => {
    return (
      <motion.div
        className={styles.flexdiv}
        animate={isOpen ? "open" : "closed"}
        variants={variantsButtons}
        initial={{ opacity: 0, y: 0, }}
      >
        <div className={styles.div}>
        <Link href={`event/${event._id}`}>
          <motion.a className={styles.link}>Find out more</motion.a>
        </Link>
        <motion.button
          className={styles.btLink}
          onClick={enter}
          disabled={event.openslots === 0 ? true : false}
        >
          Join
        </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    // ----- Event Cards --------
    // ------ feel free to style ------

    <motion.div
      className={styles.card}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <motion.img
        className={styles.cardimgtop}
        src={event.images[0].url}
        alt={event.images[0].url}
      />

      <motion.div className={styles.cardbody}>
        <div className={styles.reldiv}>

        
        <motion.h2
          title={event.title}
          className={styles.cardtitle}
          animate={"visible"}
          initial={"hidden"}
          variants={variantsTitle}
        >
          {event.title}
        </motion.h2>
        <div className={styles.divtext}>
          <motion.p
            title={event.description}
            className={styles.carddescription}
            animate={isOpen ? "open" : "closed"}
            variants={variantsDesc}
            initial={{ opacity: 0, y: 0 }}
          >
            {event.description}
          </motion.p>
        </div>
        {userLink()}
        </div>
      </motion.div>
    </motion.div>

    // -----
  );
};

export default EventItem;
