import { Fragment } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/modules/afterlogin/navigation_after.module.scss";
import { IoHomeSharp } from "@react-icons/all-files/io5/IoHomeSharp";
import { GiAbstract027 } from "@react-icons/all-files/gi/GiAbstract027";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { IoNotificationsSharp } from "@react-icons/all-files/io5/IoNotificationsSharp";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import React, { useContext, useState } from "react";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import PopUp from "./event/popup_after";

export default function NavigationLeft() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  //--------------------
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const switchModal = ()=>{

    if (isOpen) {
      setIsOpen(false);
    }
    else{
      setIsOpen(true);
    }
  }
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
        <PopUp open={isOpen} onClose={closeModal}></PopUp>
          <Link href="/">
            <div className={styles.divl}>
              <div className={styles.divlogo}></div>
            </div>
          </Link>
          <div className={styles.divbutton}>
            <Link href="/participator">
              <button className={styles.bt1} >
                <a className={styles.link1 + isActive("/")}>
                  <h2>
                    <IoHomeSharp className={styles.icon1} />
                  </h2>
                  EventX
                </a>
              </button>
            </Link>
            <Link href="/participator">
              <button className={styles.bt2}>
                <a className={styles.link2 + isActive("/notifications")}>
                  <h2>
                    <IoNotificationsSharp className={styles.icon2} />
                  </h2>
                  Notifications
                </a>
              </button>
            </Link>
            <Link href="/participator">
              <button className={styles.bt3}>
                <a className={styles.link3 + isActive("/")}>
                  <h2>
                    <MdFavorite className={styles.icon3} />
                  </h2>
                  Favourites
                </a>
              </button>
            </Link>
            <Link href="/">
              <button className={styles.bt4}>
                <a className={styles.link4 + isActive("/")}>
                  <h2>
                    <GiAbstract027 className={styles.icon4} />
                  </h2>
                  Unknown
                </a>
              </button>
            </Link>
            <Link href="/settings">
              <button className={styles.bt5}>
                <a className={styles.link5 + isActive("/settings")}>
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
                <button className={styles.button1} onClick={logout}>
                  <a className={styles.link6 + isActive("/")}>
                    <FaSignOutAlt className={styles.icon6} />
                    Sign out
                  </a>
                </button>
              </Link>
            </div>
            <div className={styles.help1}>
              <div className={styles.logouser} >
              
                <img
                  className={styles.logo}
                  src={auth.user.avatar}
                  alt={auth.user.avatar}
                  onClick={switchModal}
                />
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
    );
  };
  return (
    <Fragment>
      {Object.keys(auth).length === 0 ? (
        <div>
          <h1>Zugriff nicht erlaubt!</h1>
          <h2 style={{ color: "black" }}>Melden Sie sich an</h2>
          <Link href="/login">
            <button>Anmelden</button>
          </Link>
        </div>
      ) : (
        loggedRouter()
      )}
    </Fragment>
  );
}
