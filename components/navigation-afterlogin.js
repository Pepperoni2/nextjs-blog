import { Fragment } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/modules/navigation-after.module.scss";

export default function NavigationLeft(params) {
  return (
    <Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter"
        rel="stylesheet"
      />
      <div className={styles.main}>
        <Link href="/participator">
          <div className={styles.divl}>
            <div className={styles.divlogo}></div>
          </div>
        </Link>
        <div className={styles.divbutton}>
          <Link href="/">
            <button className={styles.bt}>
              <a className={styles.link}>EventX</a>
            </button>
          </Link>
          <Link href="/">
            <button className={styles.bt}>
              <a className={styles.link}>Notifications</a>
            </button>
          </Link>
          <Link href="/">
            <button className={styles.bt}>
              <a className={styles.link}>Favourites</a>
            </button>
          </Link>
          <Link href="/">
            <button className={styles.bt}>
              <a className={styles.link}>Unknown</a>
            </button>
          </Link>
          <Link href="/">
            <button className={styles.bt}>
              <a className={styles.link}>
                <span className={styles.materialicons}></span>Settings
              </a>
            </button>
          </Link>
        </div>
        <div className={styles.divuser}>
          <div className={styles.singoutuser}>
            <Link href="/">
              <button className={styles.button}>
                <a className={styles.link}>
                  <span className={styles.materialicons}></span>Sign out
                </a>
              </button>
            </Link>
          </div>
          <div className={styles.logouser}>
            <img className={styles.logo}></img>
          </div>
          <div className={styles.divuser}>
            <div className={styles.userhelp}>
              <span className={styles.username}>[User]</span>

              <div className={styles.userarrow}>&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
