import Head from "next/head"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../store/GlobalState"
import { useRouter } from "next/router"
import { patchData } from '../../util/fetchData'
import valid from '../../util/valid'
import { ImageUpload } from "../../util/imageUpload"
import NavigationLeft from "../../components/navigation_after"
import styles from "../../styles/modules/afterlogin/settings.module.scss"
import Link from "next/link"
// Profile page stylen, navigation sollte am besten gleich bleiben
// Style es wie du es willst 

const Settings = () => {
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
            <NavigationLeft />
            <Head>
                <title>Settings</title>
            </Head>
           < NavigationLeft></NavigationLeft>
            <section>
            <Link href="/settings/profile">
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

export default Settings