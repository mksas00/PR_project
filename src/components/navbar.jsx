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
                        <button className="btn btn-outline-secondary" type="button" style={{backgroundColor: "white", marginLeft: 5}}>Search</button>
                    </div>
            </div>

            <div className="navbarLinks" style={{alignSelf: "center"}}>
                <ul className="nav nav-pills mb-3" id="nav-tab" role="tablist">
                    <li className="nav-item" role="presentation" style={{width: '33%'}}>
                        <Link to="/" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Home</Link>
                    </li>
                    <li className="nav-item" role="presentation" style={{width: '29%'}}>
                        <Link to="/login" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Login</Link>
                    </li>
                    <li className="nav-item" role="presentation" style={{width: '33%'}}>
                        <Link to="/details" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Detials</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}
export default NavBar