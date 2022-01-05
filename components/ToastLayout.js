import React from "react";
//import NavBar from "./navigation-login";
import Notify from "./Notify";
import styles from "../styles/modules/toast.module.scss";
// Pfusch nur zum Testen da
function Layout({children}) {
    return(
        <div className={styles.container}>
            <Notify />
            {children}
        </div>
        
    )
}

export default Layout