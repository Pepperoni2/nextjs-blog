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

  const userLink = () => {
    return (
      <motion.div className={styles.flexdiv}>
        <Link href={`event/${event._id}`} >
          <motion.a className={styles.link}>
          Find out more
          </motion.a>
        </Link>
        <motion.button 
          className={styles.btLink}
          onClick={enter}
          disabled={event.openslots === 0 ? true : false}
        >
          Join
        </motion.button>
      </motion.div>
    );
  };
  const [isHovered, setHovered] = useState(false);

  return (
    // ----- Event Cards --------
    // ------ feel free to style ------

    <motion.div className={styles.card} whileHover={{}}>
      <img
        className={styles.cardimgtop}
        src={event.images[0].url}
        alt={event.images[0].url}
      />

      <motion.div className={styles.cardbody}>
        <div className={styles.divtext}>
          <h2 title={event.title} className={styles.cardtitle}>
            {event.title}
          </h2>
          <p title={event.description} className={styles.carddescription}>
            {event.description}
          </p>
        </div>
        {userLink()}
      </motion.div>
    </motion.div>

    // -----
  );
};

export default EventItem;
