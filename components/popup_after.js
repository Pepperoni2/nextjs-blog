import styles from "../styles/modules/afterlogin/popup_after.module.scss";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import { DataContext } from "../store/GlobalState";
import Cookies from "js-cookie";
import Link from "next/link";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";

export default function PopUp({open, onClose}) {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const logout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
  };
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  if (!open) return null

  return ReactDOM.createPortal(
    <>
    <div className={styles.cont} >
      <button className={styles.bt} onClick={onClose}>&#10005;</button>
      <div className={styles.content}>
        <h2>Profile</h2>
        <ul className={styles.credentials}>
          
          <li>
            {auth.user.name}
          </li>
          <li style={{textTransform: "uppercase", textDecoration: "underline"}}>
          {auth.user.role}
          </li>
          <li style={{ width:"100%", height: 30}}>
            <Link href={"/settings/profile"} >
            <p className={styles.settings}>User Settings</p>
            </Link>
          </li>
          </ul>
          <div className={styles.singoutuser1}>
              <Link href="/">
                <button className={styles.button1} onClick={logout}>
                  <a className={styles.link6 + isActive("/")}>
                    <FaSignOutAlt className={styles.icon6} />
                    Sign out
                  </a>
                </button>
              </Link>
          </div>
        
      </div>
    </div>
    </>,
    document.getElementById('portal')
  );
}
