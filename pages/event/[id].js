import Head from "next/head";
import { getData } from '../../util/fetchData'
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../store/GlobalState"
import { useRouter } from "next/router"
import { addToEnteredEvents } from "../../store/Actions";
const DetailEvent = (props) => {
    const [event] = useState(props.event)
    const { state, dispatch } = useContext(DataContext)
    const { auth, enteredEvent } = state
    const router = useRouter()
    useEffect(() => {
        if (Object.keys(auth).length === 0) router.push("/login")
    }, [auth])

    const loggedRouter = () => {
        return (
            <div>
                <Head>
                    <title>Detail Event</title>
                </Head>
                <div style={{ height: '350px' }}>
                    <img src={event.images[0].url} alt={event.images[0].url} />
                    <div style={{ cursor: 'pointer' }}>
                        {event.images.map((img, index) => (
                            <img key={index} src={img.url} alt={img.url} style={{ height: '80px', width: '20%' }} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2>{event.title}</h2>
                    <h5>{event.openslots}</h5>
                    <div>
                        {
                            event.openslots > 0
                                ? <h6>Freie Plätze: {event.openslots}</h6>
                                : <h6>Event ist vollgebucht!</h6>
                        }
                        <h6>Anzahl der Teilnehmer: {event.closedSlots - event.openslots}</h6>
                    </div>

                    <div>{event.description}</div>
                    <div>
                        {event.content}
                        {event.content}
                        {event.content}
                    </div>
                </div>
                <button onClick={() => dispatch(addToEnteredEvents(event, enteredEvent))}
                    disabled={event.openslots === 0 ? true : false}>
                    Enter
                </button>
            </div>
        )
    }

    return (
        <>
            {
                Object.keys(auth).length === 0 ? <div></div>
                    : loggedRouter()
            }
        </>

    )
}

export async function getServerSideProps({ params: { id } }) {
    const res = await getData(`event/${id}`)
    console.log(res)
    // server-side-rendering, console.log() will not be displayed in the browser
    return {
        props: { event: res.event }, // will be passed to the page component as props
    }
}

export default DetailEvent