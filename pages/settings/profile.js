import Head from "next/head"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../store/GlobalState"
import { useRouter } from "next/router"
import { patchData } from '../../util/fetchData'
import valid from '../../util/valid'
import { ImageUpload } from "../../util/imageUpload"
import NavigationLeft from "../../components/navigation_after"
import styles from "../styles/modules/afterlogin/profile.module.scss"

// Profile page stylen, navigation sollte am besten gleich bleiben
// Style es wie du es willst 

const Profile = () => {
    const initialState = {
        avatar: '',
        name: '',
        password: '',
        cf_password: ''
    }
    const [data, setData] = useState(initialState)
    const { avatar, name, password, cf_password } = data

    const { state, dispatch } = useContext(DataContext)
    const { auth, notify } = state

    useEffect(() => {
        if (auth.user) setData({ ...data, name: auth.user.name })
    }, [auth.user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    // ------ Handles incoming changes on the profile ----

    const handleUpdateProfile = e => {
        e.preventDefault()
        if (password) {
            const errMsg = valid(name, auth.user.email, password, cf_password)
            if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })
            updatePassword()
        }

        if(name !== auth.user.name || avatar) updateInfo()
    }
    // ------------------------------------------

    const updateInfo = async () => {
        let media;
        

        if(avatar) media = await ImageUpload([avatar])

        patchData('user', {
            name, avatar : avatar ? media[0].url : auth.user.avatar
        }, auth.token).then(res => {
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

            dispatch({type: 'AUTH', payload: {
                token: auth.token, 
                user: res.user
            }})
            return dispatch({type: 'NOTIFY', payload: {success: res.success}})
        })
    }

    // ----- Reset Password Update -------

    const updatePassword = () => {
        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        patchData('user/resetPassword', { password }, auth.token)
            .then(res => {
                if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.msg } })
                return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
            })
    }

    // -------------------------------

    const changeAvatar = (e) => {
        const file = e.target.files[0]
        if (!file)
            return dispatch({ type: 'NOTIFY', payload: { error: 'Diese Datei existiert nicht' } })

        if (file.size > 1024 * 1024 * 2) // 2MB
            return dispatch({ type: 'NOTIFY', payload: { error: 'The maximum image size is 5MB.' } })

        if (file.type !== "image/jpeg" && file.type !== "image/png") 
            return dispatch({ type: 'NOTIFY', payload: { error: 'Invalid file format. Only .jpeg and .png files are allowed!' } })

        console.log(file)
        setData({...data, avatar: file})
        
    }

    if (!auth.user) return null;

    return (
        <div className={styles.wrapper}>
            <NavigationLeft />
            <Head>
                <title>Profile</title>
            </Head>
           < NavigationLeft></NavigationLeft>
            <section>
                <div className={styles.griddi}>
                    <h3>
                        {auth.user.role === 'user' ? 'User Profile' : auth.user.role === 'organizer' ? 'Organizer Profile' : 'Admin Profile'}
                    </h3>
                </div>
                <div style={{ width: "150px", height: "150px", overflow: "hidden", position: "relative", margin: "15px auto", border: "1px solid" }}>
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} alt="avatar" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
                    <span style={{
                        position: "absolute", bottom: "0", left: "0", width: "100%", height: "50%", background: "#fff8",
                        textAlign: "center", transition: "0.3 ease-in-out"
                    }}>
                        <i></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            opacity: "0",
                            cursor: "pointer",

                        }} accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>

                <div>
                    <label style={{ color: "black" }} htmlFor="name">Name</label>
                    <input type="text" name="name" value={name}
                        placeholder="Your name" onChange={handleChange} />
                </div>

                <div>
                    <label style={{ color: "black" }} htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={auth.user.email} disabled={true} placeholder="Your email" />
                </div>

                <div>
                    <label style={{ color: "black" }} htmlFor="password">New Password</label>
                    <input type="password" name="password" value={password}
                        placeholder="Your new password" onChange={handleChange} />
                </div>

                <div>
                    <label style={{ color: "black" }} htmlFor="cf_password">Confirm New Password</label>
                    <input type="password" name="cf_password" value={cf_password}
                        placeholder="Your new password" onChange={handleChange} />
                </div>

                <button disabled={notify.loading} onClick={handleUpdateProfile}>
                    Update
                </button>


            </section>


        </div>
    )
}

export default Profile