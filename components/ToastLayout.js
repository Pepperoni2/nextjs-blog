import React from "react";
//import NavBar from "./navigation-login";
import Notify from "./Notify";
// Pfusch nur zum Testen da
function Layout({children}) {
    return(
        <div className="container">
            <Notify />
            {children}
        </div>
    )
}

export default Layout