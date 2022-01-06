import Link from "next/link"

const EventItem = ({ event }) => {

    // ----- The Buttons under the desc ----
    const userLink = () => {
        
        return(
            <>
            <Link href={`event/${event._id}`}>
                <a>View</a>
            </Link>
            </>
        )
    }
    // --------------------------------------
    console.log(event)
    return (
        // ----- Event Cards --------
        // ------ feel free to style ------
        <div className="card" style={{marginLeft: '300px', color: 'black'}}>
            <img className="card-img-top" src={event.images[0].url} alt={event.images[0].url}/>
                <div className="card-body">
                    <h5 title={event.title}>{event.title}</h5>
                    <p title={event.description}>
                        {event.description}
                    </p>
                    <div>
                        {userLink()}
                    </div>
                </div>
        </div>
        // ----- 
    )
}

export default EventItem