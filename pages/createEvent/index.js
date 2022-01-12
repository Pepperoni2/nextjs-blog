import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/GlobalState";
<<<<<<< HEAD
import NavigationLeft from "../../components/navigationO_after";
=======

>>>>>>> 38502084fb1550ca777eb1287155a33395f9ba84
import styles from "../../styles/modules/afterlogin/profile.module.scss";
import { set } from "date-fns";
import { Link } from "react-router-dom";

const OrgsEvent = () => {
    const initialState = {
        title: "",
        description: "",
        content: "",
        category: "",
        openslots: 0,
        organizer: "",
        images: "",
    };
    const [data, setData] = useState(initialState)
    const { title, description, content, category, openslots, organizer } = data

    const { state, dispatch } = useContext(DataContext)
    const { auth, notify } = state

    useEffect(() => {
        if (auth.user) setData({ ...data, name: auth.user.name });
    }, [auth.user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        dispatch({ type: "NOTIFY", payload: {} });
    };

    const createNewEvent = (e) => {
        e.preventDefault();
        if (title && description && content && openslots) {
            const titleLength = title.length
            if (titleLength > 50) return dispatch({ type: "NOTIFY", payload: { error: "The title is too long. (Not longer than 50 characters!)" } });
            if (description.length < 10) return dispatch({ type: "NOTIFY", payload: { error: "The description is too short" } });
            if (content.length < 10) return dispatch({ type: "NOTIFY", payload: { error: "The content is too short" } });
            if (openslots <= 0) return dispatch({ type: "NOTIFY", payload: { error: "The amount of openslots can't be zero or negative" } }); 
            
            return dispatch({ type: "NOTIFY", payload: { success: "Event erstellt!" } });

              
        }
        else {
            return dispatch({ type: "NOTIFY", payload: { error: "Please fill out all the event fields!" } })
        }


    };

return (
    <div>
        <NavigationLeft />
        <Head>
            <title>Create Portal</title>
        </Head>
        <section>
            <div style={{ paddingLeft: '20em' }}>
                <div>
                    <h2>{auth.user.name}'s own Event</h2>
                    <h3>Here you can create your own event and publish it, to display it on the EventX Webpage to promote your event to other participants.</h3>
                </div>
                <div>
                    <label htmlFor="organizer" style={{color: 'black'}}>
                        Organizer
                    </label>
                    <input
                        className={styles.inputs}
                        type="text"
                        name="organizer"
                        defaultValue={auth.user.name}
                        disabled={true}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="title" style={{color: 'black'}}>
                        Title
                    </label>
                    <input
                        className={styles.inputs}
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Title of your Event"
                        onChange={handleChange}
                    />
                </div>
                <span className={styles.textspan}></span>
                <div>
                    <label htmlFor="description" style={{color: 'black'}}>
                        Description
                    </label>
                    <input
                        className={styles.inputs}
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Describe your event in a few words!"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="content" style={{color: 'black'}}>
                        Content
                    </label>
                    <input
                        className={styles.inputs}
                        type="text"
                        name="content"
                        value={content}
                        placeholder="More indepth information about the event"
                        onChange={handleChange}
                    />
                </div>
                {/* Hier wäre es nice wenn wir so verschieden Panels hätten, 
                    wo man die Kategorie auswählen könnte,
                    wie z.B. Erholung, Party, Schulung usw. */
                }
                <span className={styles.textspan}></span>
                <div>
                    <label htmlFor="openslots" style={{color: 'black'}}>
                        Content
                    </label>
                    <input
                        className={styles.inputs}
                        type="number"
                        name="openslots"
                        value={openslots}
                        placeholder="Offene Plätze"
                        onChange={handleChange}
                    />
                </div>
                { /* Thumbnail  */}
                <div>
                    <img src="/images/profile.jpg" />
                </div>
                <div className={styles.itembt}>

                    <a
                        disabled={notify.loading}
                        onClick={createNewEvent}
                        className={styles.bt}
                    >
                        Create
                    </a>
                </div>
            </div>
        </section>
    </div>
);
};

export default OrgsEvent;