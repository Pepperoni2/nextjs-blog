import Link from "next/link";
import { useContext, useState } from "react";
import { DataContext } from "../store/GlobalState";
import { ExitEvent } from "../store/Actions";
import Modal from "../components/Modal";
import Footer from "./footer";
import { motion } from "framer-motion";
import styles from "../styles/modules/afterlogin/EnteredEventItem.module.scss";
const EnteredEvent = ({ event, dispatch, enteredEvent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const switchModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      dispatch({
        type: "EXIT_EVENT",
        payload: {
          data: enteredEvent,
          id: event._id,
          title: event.title,
          type: "ADD_EVENT",
        },
      });
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Modal open={isOpen} onClose={closeModal}></Modal>
      <tr className={styles.contenttb}>
        <Link href={`/event/${event._id}`}>
          <td className={styles.wrapimages}>
            <img
              className={styles.images}
              src={event.images[0].url}
              alt={event.images[0].url}
            />
          </td>
        </Link>
        <div className={styles.textdiv}>
          <div className={styles.title}>
            <h5 className={styles.linkwrap}>
              <Link href={`/event/${event._id}`}>
                <a className={styles.linktitle}>{event.title}</a>
              </Link>
            </h5>

            <h6 className={styles.wrapinfo}>
             
              {event.openslots > 0 ? (
                <p className={styles.infoOpen}>Free remaining places: {event.openslots}</p>
              ) : (
                <p className={styles.infofull}>Full: Event is filled</p>
              )}
               <p className={styles.countopen}>Number of participants: {event.closedSlots}</p>
            </h6>
           
          </div>

          <div className={styles.wrapbutton}>
            <button onClick={switchModal} className={styles.bt}>
              Delete
            </button>
          </div>
        </div>
      </tr>
    </motion.div>
  );
};

export default EnteredEvent;
