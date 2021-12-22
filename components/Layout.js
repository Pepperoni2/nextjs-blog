import React from "react";
import NavBar from "./navigation-login";
import Notify from "./Notify";
// Pfusch nur zum Testen da
// Diese Komponente ist dafür zuständig, wieso das CSS slightly off ist
function Layout({children}) {
    return(
        <div className="container">
            <NavBar/>
            <Notify />
            {children}
        </div>
    )
}

export default Layout