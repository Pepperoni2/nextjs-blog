import { Fragment } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/modules/navigation-after.module.scss";

export default function NavigationLeft(params) {
  return (
    <Fragment>
      <div className={styles.main}>
      <Link href="/participator">
        <div className={styles.divlogo}></div>
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
        <div className={styles.divuser}></div>
      </div>
    </Fragment>
  );
}
