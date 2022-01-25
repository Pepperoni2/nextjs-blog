import Head from "next/head"
import { useContext } from "react"
import EnteredEvent from "../components/EnteredEventItem"
import { DataContext } from "../store/GlobalState"

const yourEvents = () => {
    const { state, dispatch } = useContext(DataContext)
    const { enteredEvent } = state


    if( enteredEvent.length === 0 ) return <img src="/noEvents.png" alt="No Events :("/>
    return (
        <div>
            <Head>
                <title>Your Events Page</title>
            </Head>
            <div>
                <h2>Your Events</h2>
                <h3>Here you can keep track of every event you've entered or already participated</h3>

                <table>
                    <tbody>
                        {
                            enteredEvent.map(event => (
                                <EnteredEvent key={event._id} event={event} dispatch={dispatch} enteredEvent={enteredEvent} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default yourEvents