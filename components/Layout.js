import React from "react";
import Navigation from './navigation-login'
import Notify from './Notify'

function Layout({children}){
    return(
        <div className="container">
            <Navigation />
            <Notify />
            {children}
        </div>
    )
}

export default Layout