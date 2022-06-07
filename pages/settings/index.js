import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import { patchData } from "../../util/fetchData";
import valid from "../../util/valid";
import { ImageUpload } from "../../util/imageUpload";
import NavigationLeftP from "../../components/navigationP_after";
import styles from "../../styles/modules/afterlogin/settings.module.scss";
import Link from "next/link";
import Footer from "/components/footer";

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
      <NavigationLeftP />
      <Head>
        <title>Settings</title>
      </Head>

      <section>
        <h1>Settings</h1>
        <div className={styles.art}>
          {/* <img></img>  */}
        </div>
        <div className={styles.art2}>
          {/* <img></img> */}
        </div>
        <div className={styles.flexdiv}>
          <Link href="settings/profile">
            <button className={styles.btpro}>
              <a className={styles.linkpro + isActive("/")}>Profile-Settings</a>
            </button>
          </Link>

          {Object.keys(auth).length !== 0 && auth.user.role !== "admin" ? (
            <></>
          ) : (
            <Link href="settings/users">
              <button className={styles.btusers}>
                <a className={styles.linkusers + isActive("/")}>
                  Admin Settings
                </a>
              </button>
            </Link>
          )}
        </div>

        <div className={styles.footer1}>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Settings;
