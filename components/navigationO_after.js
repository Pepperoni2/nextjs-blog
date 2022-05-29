import { Fragment } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/modules/afterlogin/Onavigation_after.module.scss";
import { IoHomeSharp } from "@react-icons/all-files/io5/IoHomeSharp";
import { GiAbstract027 } from "@react-icons/all-files/gi/GiAbstract027";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { CgEventbrite } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsSharp } from "@react-icons/all-files/io5/IoNotificationsSharp";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import PopUp from "./popup_after";

export default function NavigationLeftP() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, entered } = state;

  //--------------------
  const [isOpen, setIsOpen] = useState(false);

  const switchModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const logout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
  };

  const loggedRouter = () => {
    return (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        <div className={styles.main}>
          <PopUp open={isOpen} onClose={switchModal}></PopUp>
          <div className={styles.flexdiv}>
            <Link href="/">
              <div className={styles.divl}>
                <div className={styles.divlogo}></div>
              </div>
            </Link>
           
            <div className={styles.divbutton}>
            <Link href="/createEvent">
              <button className={styles.bt1}>
                <a className={styles.link1 + isActive("/")}>
                  <h2 className={styles.icon1}>&#43;</h2>
                  Create Events
                </a>
              </button>
              </Link>
              <Link href="/settingsO">
                <button className={styles.bt5}>
                  <a className={styles.link5 + isActive("/settings")}>
                    <h2>
                      <FiSettings className={styles.icon5} />
                    </h2>{" "}
                    Settings
                  </a>
                </button>
              </Link>
            </div>
            <div className={styles.divbottom}>
                <div className={styles.singoutuser}>
                  <Link href="/">
                    <button className={styles.button1} onClick={logout}>
                      <a className={styles.link6 + isActive("/")}>
                        <FaSignOutAlt className={styles.icon6} />
                        Sign out
                      </a>
                    </button>
                  </Link>
                </div>
                <div className={styles.help1}>
                  <div className={styles.logouser} onClick={switchModal}>
                    <img
                      className={styles.logo}
                      src={auth.user.avatar}
                      alt={auth.user.avatar}
                      onClick={switchModal}
                    />
                  </div>
                  <div className={styles.divuser}>
                    <div className={styles.userhelp}>
                      <span className={styles.username}>
                        {auth.user.name}{" "}
                        <span className={styles.underline}></span>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <Fragment>
      {Object.keys(auth).length === 0 ? (
        <div></div>
      ) : (
        /*           <div>
            <h1>Zugriff nicht erlaubt!</h1>
            <h2 style={{ color: 'black' }}>Melden Sie sich an</h2>
            <Link href="/login">
              <button>Anmelden</button>
            </Link>
          </div> */
        loggedRouter()
      )}
    </Fragment>
  );
}
