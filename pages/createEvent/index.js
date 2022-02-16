import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import NavigationLeft from "../../components/navigationO_after";
import styles from "../../styles/modules/afterlogin/profile.module.scss";
import { postData } from "../../util/fetchData";
import { ImageUpload } from "../../util/imageUpload";
import { useRouter } from "next/router";

const OrgsEvent = () => {
    const initialState = {
        title: "",
        description: "",
        content: "",
        category: "",
        openslots: 0,
        organizer: "",
        images: [{ public_id: "", url:""}]
    };
    const [eventData, setData] = useState(initialState)
    const { title, description, content, category, openslots, organizer, images } = eventData

    const router = useRouter();

//     const { state, dispatch } = useContext(DataContext)
//     const { auth, notify } = state

    useEffect(() => {
        if (Object.keys(auth).length !== 0) {
            setData({ ...eventData, name: auth.user.name });
        }
        else{
            router.push("/organizer")
        }
        
        
    }, [auth])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...eventData, [name]: value });
    };

    // ----- Handling thumbnail input ----------------

    const handleThumbnail = (e) => {
        const file = e.target.files[0];
        if (!file)
            return dispatch({
                type: "NOTIFY",
                payload: { error: "This file does not exist!" },
            });

        if (file.size > 1024 * 1024 * 2)
            // 2MB
            return dispatch({
                type: "NOTIFY",
                payload: { error: "The maximum image size is 2MB." },
            });

        if (file.type !== "image/jpeg" && file.type !== "image/png")
            return dispatch({
                type: "NOTIFY",
                payload: {
                    error: "Invalid file format. Only .jpeg and .png files are allowed!",
                },
            });
        setData({ ...eventData, images: file});
    }

    // Image Handling 

    const handleImages = (e) => {
        const file = e.target.files[1]  // six files
        if (!file)
            return dispatch({
                type: "NOTIFY",
                payload: { error: "This file does not exist!" },
            });

        if (file.size > 1024 * 1024 * 10)
            // 10MB
            return dispatch({
                type: "NOTIFY",
                payload: { error: "The maximum size of all images should not is 10MB." },
            });

        if (file.type !== "image/jpeg" && file.type !== "image/png")
            return dispatch({
                type: "NOTIFY",
                payload: {
                    error: "Invalid file format. Only .jpeg and .png files are allowed!",
                },
            });
        setData({ ...eventData, images: file});
    }

    const createNewEvent = async (e) => {
        e.preventDefault();
        if (title && description && content && openslots) {


            if (title.length > 50) return dispatch({ type: "NOTIFY", payload: { error: "The title is too long. (Not longer than 50 characters!)" } });
            if (description.length < 10) return dispatch({ type: "NOTIFY", payload: { error: "The description is too short" } });
            if (description.length > 50) return dispatch({ type: "NOTIFY", payload: { error: "The description is too long" } });
            if (content.length < 10) return dispatch({ type: "NOTIFY", payload: { error: "The content is too short" } });
            if (openslots <= 0) return dispatch({ type: "NOTIFY", payload: { error: "The amount of openslots can't be zero or negative" } });
        
            let media;

            if (images) media = await ImageUpload([images]);
            const res = await postData(
                "create/newEvent", 
                { 
                  title,
                  description, 
                  content, 
                  category, 
                  openslots, 
                  organizer: auth.user.name, 
                  images: media 

                }, eventData
            )

            if (res.err) return dispatch({ type: "NOTIFY", payload: { error: "An error in the event-creation has occured!" } });
            return dispatch({ type: "NOTIFY", payload: { success: "Event created!" } });
        }
        else {
            return dispatch({ type: "NOTIFY", payload: { error: "Please fill out all the event fields!" } })
        }
    }

//     };

    return (
        <div>
            <NavigationLeft />
            <Head>
                <title>Create Portal</title>
            </Head>
            <section>
                <div style={{ paddingLeft: '20em' }}>
                    <div>
                        {
                            Object.keys(auth).length === 0
                            ?
                             <div></div>
                            :
                            <h2>{auth.user.name}'s own Event</h2>
                        }
                        <h3>Here you can create your own event and publish it, to display it on the EventX Webpage to promote your event to other participants.</h3>
                    </div>
                    <div>
                        <label htmlFor="title" style={{ color: 'black' }}>
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
                        <label htmlFor="description" style={{ color: 'black' }}>
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
                        <label htmlFor="content" style={{ color: 'black' }}>
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
                        <label htmlFor="category" style={{ color: 'black' }}>
                            Category
                        </label>
                        <input
                            className={styles.inputs}
                            type="text"
                            name="category"
                            value={category}
                            placeholder="Category"
                            onChange={handleChange}
                        />
                    </div>
                    <span className={styles.textspan}></span>
                    <div>
                        <label htmlFor="openslots" style={{ color: 'black' }}>
                            Openslots
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
                        <label htmlFor="images" style={{ color: 'black' }}>
                            Thumbnail
                        </label>
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            onChange={handleThumbnail}
                        />
                    </div>
                    { /* Event-Images */ }
                    <div>
                        <label htmlFor="images" style={{ color: 'black' }}>
                            Images of your Event
                        </label>
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            multiple onChange={handleImages}
                        />
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