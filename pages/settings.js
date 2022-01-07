import Head from "next/head"
import { useState, useContext } from "react"
import { DataContext } from "../store/GlobalState"
import NavigationLeft from "../components/navigation_after"
import styles from "../styles/modules/afterlogin/settings.module.scss"

const Settings = () => {
    const initialState = {
        avatar: '',
        name: '',
        password: '',
        cf_password: ''
    }
    const [data, setData] = useState(initialState)
    const {avatar, name, password, cf_password} = data

    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    if(!auth.user) return null;

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Profile</title>
            </Head>
           < NavigationLeft></NavigationLeft>
            <section>
                <div className={styles.griddi}>
                    <h3>
                        {auth.user.role === 'user' ? 'User Profile' : auth.user.role === 'organizer' ? 'Organizer Profile' : 'Admin Profile'}
                    </h3>
                
                <div className={styles.image}>
                    <img src={auth.user.avatar}alt={auth.user.avatar} />
                </div>
                </div>

            </section>


        </div>
    )
}

export default Settings