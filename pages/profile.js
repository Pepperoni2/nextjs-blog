import Head from "next/head"
import { useState, useContext } from "react"
import { DataContext } from "../store/GlobalState"

const Profile = () => {
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
        <div>
            <Head>
                <title>Profile</title>
            </Head>

            <section>
                <div>
                    <h3>
                        {auth.user.role === 'user' ? 'User Profile' : auth.user.role === 'organizer' ? 'Organizer Profile' : 'Admin Profile'}
                    </h3>
                </div>
                <div>
                    <img src={auth.user.avatar}alt={auth.user.avatar} />
                </div>


            </section>
        </div>
    )
}

export default Profile