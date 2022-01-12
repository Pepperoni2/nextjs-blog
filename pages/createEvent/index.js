import Head from "next/head";
import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";

import styles from "../../styles/modules/afterlogin/profile.module.scss";

const OrgsEvent = () => {
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    return (
        <div>
            
            <Head>
                <title>Create Portal</title>
            </Head>
            <div>
                <h2>{auth.user.name}'s own Event</h2>
                <h3>Here you can create your own event and publish it, to display it on the EventX Webpage to promote your event to other participants.</h3>
                
            </div>
            
        </div>
    )
}

export default OrgsEvent