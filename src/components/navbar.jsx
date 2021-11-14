import React from "react";
import {Link} from "react-router-dom";


const NavBar = () =>
{

    return(

        <div className="navbarDiv">
            <div className="logoIM"/>

            <div className="navbarLinks">
                <ul className="nav nav-pills mb-3" id="nav-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Login</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Register</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default NavBar