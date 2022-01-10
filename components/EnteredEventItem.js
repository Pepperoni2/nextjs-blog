import Link from "next/link"
import { useContext } from "react"
import { DataContext } from "../store/GlobalState"
import { ExitEvent } from "../store/Actions"

const EnteredEvent = ({event, dispatch, enteredEvent}) => {
    const { state, dispatch } = useContext(DataContext)
    const { exit } = state


    return (
        <tr>
            <td style={{width: '100px', overflow: 'hidden'}}>
                <img src={event.images[0].url} alt={event.images[0].url}  style={{minWidth: '200px', height: '100px'}}/>
            </td>

            <td styl={{minWidth: '200px'}}>
                <h5>
                    <Link href={`/event/${event._id}`}>
                        <a>{event.title}</a>
                    </Link>
                </h5>

                <h6>
                    {event.openslots}
                    {
                        event.openslots > 0
                        ? <p>Offen: {event.openslots} Plätze frei</p> 
                        : <p>Voll: keine Plätze frei</p>
                         
                    }
                </h6>
            </td>

            <td style={{minWidth: '50px', cursor: 'pointer', alignItems: 'center'}}>
                <button aria-hidden="true" style={{color: 'red', margin: '10px'}}>
                    Entfernen
                </button>
            </td>
        </tr>
    )
}

export default EnteredEvent