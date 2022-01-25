import Head from "next/head"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../store/GlobalState"
import { useRouter } from "next/router"
import { patchData } from '../../util/fetchData'
import valid from '../../util/valid'
import { ImageUpload } from "../../util/imageUpload"
import NavigationLeftO from "../../components/navigationO_after"
import styles from "../../styles/modules/afterlogin/settings.module.scss"
import Link from "next/link"
// Profile page stylen, navigation sollte am besten gleich bleiben
// Style es wie du es willst 

const SettingsO = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(DataContext);
    const { auth } = state;

    const isActive = (r) => {
        if (r === router.pathname) {
          return " active";
        } else {
          return "";
        }
      };

    return (
        <div className={styles.wrapper}>
            <NavigationLeftO />
            <Head>
                <title>Settings</title>
            </Head>
           
            <section>
            <Link href="/settingsO/profile">
              <button className={styles.btpro} >
                <a className={styles.linkpro + isActive("/")}>
                  Profile-Settings
                </a>
              </button>
            </Link>
            </section>

        </div>
    )
}

export default SettingsO