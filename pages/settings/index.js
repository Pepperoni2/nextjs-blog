import Head from "next/head"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../store/GlobalState"
import { useRouter } from "next/router"
import { patchData } from '../../util/fetchData'
import valid from '../../util/valid'
import { ImageUpload } from "../../util/imageUpload"
import NavigationLeft from "../../components/navigation_after"
import styles from "../styles/modules/afterlogin/settings.module.scss"

// Profile page stylen, navigation sollte am besten gleich bleiben
// Style es wie du es willst 

const Settings = () => {
    

    return (
        <div className={styles.wrapper}>
            <NavigationLeft />
            <Head>
                <title>Settings</title>
            </Head>
           < NavigationLeft></NavigationLeft>
            


        </div>
    )
}

export default Settings