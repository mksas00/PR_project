import React from "react";
import { decodeToken, isExpired  } from "react-jwt";
import {Link} from "react-router-dom";


const NavBar = () =>
{

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));
    
    return(
        <div className="navbarDiv">
            <div className="logoIM"/>

            <div className="input-group mb-3" style={{alignSelf:"center" , width: "70%", marginRight:'5%'}}>
                <input type="text" className="form-control" placeholder="Search film"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" style={{backgroundColor: "white", marginLeft: 5}}>Search</button>
                    </div>
            </div>

            <div className="navbarLinks" style={{alignSelf: "center"}}>
                <ul className="nav nav-pills mb-3" id="nav-tab" role="tablist" style={{display:"flex", justifyContent:'space-around', flexDirection:'row', flexWrap:'nowrap'}}>

                    {!isNotLoggedIn && <li className="nav-item" role="presentation" style={{width:'fit-content'}}>
                        <Link to="/" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Home</Link>
                    </li>}
                    {isNotLoggedIn && <li className="nav-item" role="presentation" style={{width:'fit-content'}}>
                        <Link to="/login" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Login</Link>
                    </li>}
                    {!isNotLoggedIn && <li className="nav-item" role="presentation" style={{width:'fit-content'}}>
                        <Link to="/addMovie" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Add</Link>
                    </li>}
                    {isNotLoggedIn && <li className="nav-item" role="presentation" style={{width:'fit-content'}}>
                        <Link to="/signUp" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">Sign Up</Link>
                    </li>}
                    {!isNotLoggedIn && <li className="nav-item" role="presentation" style={{width:'fit-content'}}>
                        <Link to="/login" style={{color:'white'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true" onClick={()=> {localStorage.removeItem('token')}} >LogOut</Link>
                    </li>}

                </ul>
            </div>

        </div>
    )
}
export default NavBar