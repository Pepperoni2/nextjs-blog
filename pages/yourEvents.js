import Head from "next/head"
import { useContext } from "react"
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
            
            <h1>Your Events</h1>
        </div>
    )
}

export default yourEvents