import styles from "../../styles/modules/afterlogin/eventitems_after.module.scss";
import Link from "next/link";
//import Image from "next/image";
import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToEnteredEvents } from "../../store/Actions";
import { motion } from "framer-motion";
import  ModalDeleteEvent  from "../ModalDelete";
//import { set } from "date-fns";
//import { tr } from "date-fns/locale";
//import { deleteData, putData } from "../../util/fetchData";
const entered = false;
<<<<<<< HEAD
const EventItem = ({ event, dispatch }) => {
  const { state } = useContext(DataContext);
  const { auth } = state;

  /*     dispatch({type: 'NOTIFY', payload: {success: 'You have successfully entered "'+ event.title + '"'}})
   */ // ----- The Buttons under the desc ----
  

=======
const EventItem = ({ event }) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth, enteredEvent } = state;

  /*     dispatch({type: 'NOTIFY', payload: {success: 'You have successfully entered "'+ event.title + '"'}})
   */ // ----- The Buttons under the desc ----
  const enter = async () => {
    const username = auth.user.name;
    const ent = dispatch(addToEnteredEvents(event, enteredEvent));

    if (!ent) {
      await putData(`event/${event._id}`, username);

      dispatch({
        type: "NOTIFY",
        payload: {
          success: 'You have successfully entered "' + event.title + '"',
        },
      });
    } else {
      dispatch({
        type: "NOTIFY",
        payload: {
          success: 'You have already entered "' + event.title + '"',
        },
      });
    }
  };
>>>>>>> 596ba97c886d0a40c6f1ef785b4222bd11fedd2e

  // const variantsTitle = {
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       y: {
  //         delay: 0.5,
  //       },
  //       opacity: {
  //         delay: 0.5,
  //       },
  //     },
  //   },
  //   hidden: { opacity: 0, y: "-100" },
  // };

  const variantsDesc = {
    open: {
      opacity: 1,
      y: -10,
      transition: {
        bounce: 0,
        damping: 1,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: 10,

      transition: {
        y: { delay: 0.1, bounce: 0, damping: 1 },
        opacity: { delay: 0.1 },
      },
    },
  };
  const variantsButtons = {
    open: {
      opacity: 1,
      y: -10.5,
      transition: {
        bounce: 0,
        damping: 1,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: 10.5,

      transition: {
        y: { delay: 0.1, bounce: 0, damping: 1 },
        opacity: { delay: 0.1 },
      },
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const userLink = () => {
    return (
      <div className={styles.flexdiv}>
        <motion.div
          className={styles.div}
          animate={isOpen ? "open" : "closed"}
          variants={variantsButtons}
          initial={{ opacity: 0, y: 0 }}
        >
          <Link href={`event/${event._id}`}>
            <motion.a className={styles.link}>Find out more</motion.a>
          </Link>
          {/* <motion.button
            className={styles.btLink}
            onClick={enter}
            disabled={event.openslots === 0 || entered === true ? true : false}
          >
            Join
          </motion.button> */}
        </motion.div>
      </div>
    );
  };

  const adminLink = () => {
<<<<<<< HEAD
    
    return(
=======
    return (
>>>>>>> 596ba97c886d0a40c6f1ef785b4222bd11fedd2e
      <div className={styles.flexdiv}>
        
        <motion.div
          className={styles.div}
          animate={isOpen ? "open" : "closed"}
          variants={variantsButtons}
          initial={{ opacity: 0, y: 0 }}
        >
          
          <Link href={`event/${event._id}`}>
            <motion.a className={styles.link}>Find out more</motion.a>
          </Link>
<<<<<<< HEAD
        <button onClick={switchModal} className={styles.btLink}>
          Delete
        </button>

       </motion.div>
=======
        </motion.div>
>>>>>>> 596ba97c886d0a40c6f1ef785b4222bd11fedd2e
      </div>
    );
  };

  const openModal = () => {
    setIsOpen2(true);
  };

  const closeModal = () => {
    setIsOpen2(false);
  };

  const switchModal = () => {
    if (isOpen2) {
      setIsOpen2(false);
    } else {
      dispatch({
        type: "ADD_MODAL",
        payload: {
          data: '',
          id: event._id,
          title: event.title,
          type: "DELETE_EVENT",
        },
      });
    }
    setIsOpen2(true);
    
  }

  return (

    // ----- Event Cards --------
    // ------ feel free to style ------

    <motion.div
      className={styles.card}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      viewport={{ once: true }}
    >
<<<<<<< HEAD
      <ModalDeleteEvent open={isOpen2} onClose={closeModal}></ModalDeleteEvent>
=======
      {auth.user.role.toLowerCase() == "admin" 
              // || auth.user.role.toLowerCase() == "admin" 
              ? (
                <motion.button
                className={styles.btDelete}
                onClick={() =>
                  dispatch({
                    type: "ADD_MODAL",
                    payload: [
                      {
                        data: "",
                        id: event._id,
                        title: event.title,
                        type: "DELETE_EVENT",
                      },
                    ],
                  })
                }
              >
                Delete
              </motion.button>
              ) : (
                
                <></>
              )}
     

>>>>>>> 596ba97c886d0a40c6f1ef785b4222bd11fedd2e
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
            // animate={"visible"}
            // initial={"hidden"}
            // variants={variantsTitle}
            // viewport={{ once: true }}
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
          {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
          
        </div>
      </motion.div>
      
    </motion.div>

    // -----
  );
};

export default EventItem;
