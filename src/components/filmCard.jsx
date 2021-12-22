import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const FilmCard = () =>
{

    let navigate = useNavigate();
    
    const[divBorder, setBorder] = useState('1px solid white')



    return(
        <li className='filmcard' onMouseEnter={()=>{setBorder('1px solid black')}} onMouseLeave={()=>{setBorder('1px solid white')}} style={{cursor:'pointer'}} onClick={()=>{navigate("/details")}}>
            <Link to="/details"  className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true"Link/>
            <div className='filmcard_div' style={{border:divBorder, padding:20 }}> 
                <img className='filmImage' src="https://static.posters.cz/image/750/plakaty/avengers-endgame-journey-s-end-i73600.jpg">
                </img>
                <span style={{margin:10}}>Tytuł filmu</span>
                <span style={{margin:10}}>Opis filmu</span>
            </div>
        </li>
    );

}
export default FilmCard;