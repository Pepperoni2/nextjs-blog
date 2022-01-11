import React from "react";
import NavBarLogin from "./navigation-login";
import NavBarUserPage from "./navigation-afterlogin";
import Notify from "./Notify";

// Pfusch nur zum Testen da
// Diese Komponente ist dafür zuständig, wieso das CSS slightly off ist
function Layout({children}) {
    return(
        <div className="container">
            <NavBarLogin/>
            <Notify />
            <NavBarUserPage />
            {children}
        </div>
    )
}

export default Layout