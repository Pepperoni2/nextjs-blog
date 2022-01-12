import styles from "../../styles/modules/afterlogin/eventitems_after.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext,useState, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToEnteredEvents } from "../../store/Actions";


const EventItem = ({ event }) => {
    const {state, dispatch} = useContext(DataContext)
    const { enteredEvent } = state
/*     dispatch({type: 'NOTIFY', payload: {success: 'You have successfully entered "'+ event.title + '"'}})
 */    // ----- The Buttons under the desc ----
    const enter = () => {
      const ent = dispatch(addToEnteredEvents(event, enteredEvent))
      if(!ent) dispatch({type: 'NOTIFY', payload: {success: 'You have successfully entered "'+ event.title + '"'}})
      ent === false
    } 

    const userLink = () => {
        
        return(
            <>
            <Link href={`event/${event._id}`}>
                {/* <a className={styles.link}> */}
                    Find out more
                    {/* </a> */}
            </Link>
            <button onClick={enter}
            disabled={event.openslots === 0 ? true : false}>
                Enter
            </button>
            </>
        )
    }
/*     
    console.log(event) */
// --------------------------------------
useEffect
  
    // if (!Array.isArray(event) || length <= 0) {
    //   return null;
    // }

  return (
    // ----- Event Cards --------
    // ------ feel free to style ------
 

    <div className="card">
    
      <img
        className={styles.cardimgtop}
        src={event.images[0].url}
        alt={event.images[0].url}
      />
      <div className={styles.cardbody}>
        <h5 title={event.title} className={styles.cardtitle}>
          {event.title}
        </h5>
        <p title={event.description} className={styles.carddescription}>
          {event.description}
        </p>
        <div className={styles.divlink}>{userLink()}</div>
      </div>
    </div>
    
    // -----
  );
};

export default EventItem;
