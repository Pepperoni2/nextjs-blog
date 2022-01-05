import { Fragment } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/modules/navigation-after.module.scss";
import { IoHomeSharp } from "@react-icons/all-files/io5/IoHomeSharp";
import { GiAbstract027 } from "@react-icons/all-files/gi/GiAbstract027";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { IoNotificationsSharp } from "@react-icons/all-files/io5/IoNotificationsSharp";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import { useRouter } from 'next/router'

// async function Open(){

//   document.getElementById("userhelp").style.width="50px";

// }
export default function NavigationLeft() {

  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const loggedRouter = () => {
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
              <button className={styles.bt1}>
                <a className={styles.link1}>
                  <h2>
                    <IoHomeSharp className={styles.icon1} />
                  </h2>
                  EventX
                </a>
              </button>
            </Link>
            <Link href="/">
              <button className={styles.bt2}>
                <a className={styles.link2}>
                  <h2>
                    <IoNotificationsSharp className={styles.icon2} />
                  </h2>
                  Notifications
                </a>
              </button>
            </Link>
            <Link href="/">
              <button className={styles.bt3}>
                <a className={styles.link3}>
                  <h2>
                    <MdFavorite className={styles.icon3} />
                  </h2>
                  Favourites
                </a>
              </button>
            </Link>
            <Link href="/">
              <button className={styles.bt4}>
                <a className={styles.link4}>
                  <h2>
                    <GiAbstract027 className={styles.icon4} />
                  </h2>
                  Unknown
                </a>
              </button>
            </Link>
            <Link href="/">
              <button className={styles.bt5}>
                <a className={styles.link5}>
                  <h2>
                    <GiAbstract027 className={styles.icon5} />
                  </h2>{" "}
                  Settings
                </a>
              </button>
            </Link>
          </div>
          <div className={styles.divuser}>
            <div className={styles.singoutuser}>
              <Link href="/">
                <button className={styles.button1}>
                  <a className={styles.link6}>
                    <FaSignOutAlt className={styles.icon6} />
                    Sign out
                  </a>
                </button>
              </Link>
            </div>
            <div className={styles.help1}>
              <div className={styles.logouser}>
                <img className={styles.logo} src={auth.user.avatar} alt={auth.user.avatar}/>
              </div>
              <div className={styles.divuser}>
                <div className={styles.userhelp} id="userhelp">
                  <span className={styles.username}>{auth.user.name}</span>

                  {/* <div className={styles.userarrow}>
                &gt;
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      {
        Object.keys(auth).length === 0
          ?
          <div>
            <h1>Zugriff nicht erlaubt!</h1>
            <h2 style={{ color: 'black' }}>Melden Sie sich an</h2>
            <Link href="/login">
              <button>Anmelden</button>
            </Link>
          </div>
          : loggedRouter()
      }
    </Fragment>
  );
}
