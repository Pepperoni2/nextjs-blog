import styles from "../../styles/modules/afterlogin/eventitems_after.module.scss";
import Link from "next/link"
import Image from "next/image";
const EventItem = ({ event }) => {

    // ----- The Buttons under the desc ----
    const userLink = () => {
        
        return(
            <>
            <Link href={`event/${event._id}`}>
                <a className={styles.link}>View</a>
            </Link>
            </>
        )
    }
    // --------------------------------------
    console.log(event)

    

    return (
        // ----- Event Cards --------
        // ------ feel free to style ------
        <div className={styles.card}>
            <img className={styles.cardimgtop} src={event.images[0].url} alt={event.images[0].url}/>
                <div className={styles.cardbody}>
                    <h5 title={event.title} className={styles.cardtitle}>{event.title}</h5>
                    <p title={event.description} className={styles.carddescription}>
                        {event.description}
                    </p>
                    <div className={styles.divlink}>
                        {userLink()}
                    </div>
                </div>
        </div>
        // ----- 
    )
}

export default EventItem