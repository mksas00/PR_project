import React from "react";
import {Link} from "react-router-dom";


const NavBar = () =>
{

    return(

        <div className="navbarDiv">
            <div className="logoIM"/>

            <div className="input-group mb-3" style={{alignSelf:"center" , width: "70%"}}>
                <input type="text" className="form-control" placeholder="Search film"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
            </div>

            <div className="navbarLinks" style={{alignSelf: "center"}}>
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