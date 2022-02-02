import Link from "next/link"
import { useContext, useState } from "react"
import { DataContext } from "../store/GlobalState"
import { ExitEvent } from "../store/Actions"
import Modal from "../components/Modal"

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
        }
        else {
            dispatch({type: 'EXIT_EVENT', payload: {data: enteredEvent, id: event._id, title: event.title, type: 'ADD_EVENT' }})
            setIsOpen(true);
        }
    }


    return (
        <div>
            <Modal open={isOpen} onClose={closeModal}></Modal>
            <tr>
                <td style={{ width: '100px', overflow: 'hidden' }}>
                    <img src={event.images[0].url} alt={event.images[0].url} style={{ minWidth: '200px', height: '100px' }} />
                </td>

                <td styl={{ minWidth: '200px' }}>
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

                <td style={{ minWidth: '50px', cursor: 'pointer', alignItems: 'center' }}>
                    <button aria-hidden="true" style={{ color: 'red', margin: '10px' }} onClick={switchModal}>
                        Delete
                    </button>
                </td>
            </tr>
        </div>
    )
}

export default EnteredEvent