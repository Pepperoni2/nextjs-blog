import React from "react";
//import NavBar from "./navigation-login";
import Notify from "./Notify";
import styles from "../styles/modules/toast.module.scss";
import { AnimatePresence, motion } from "framer-motion";

// Pfusch nur zum Testen da
function Layout({children}) {
    return(
        
        <motion.div className={styles.container}  >
            <Notify />
            {children}
        </motion.div>
        
    )
}

export default Layout