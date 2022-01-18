import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const FilmCard = (props) =>
{

    let navigate = useNavigate();
    
    const[divBorder, setBorder] = useState('1px solid black')
    const {title, image, content, id} = props


    return(
        <li className='filmcard' onMouseEnter={()=>{setBorder('1px solid white')}} onMouseLeave={()=>{setBorder('1px solid black')}} style={{cursor:'pointer', backgroundColor:'#28282b'}} onClick={()=>{navigate("/details", {state:{movieId: id}})}}>
            <Link to="/details" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true" style={{display:'none'}}/>

            <div className='filmcard_div' style={{border:divBorder, padding:20, flex: 1, display:'flex', flexDirection: 'row', flexWrap:'nowrap' }}> 
                <img className='filmImage' src={image}  />
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <span style={{marginLeft:100 ,margin:10, fontSize:25, fontWeight:'bold', color:'white', fontStyle:'oblique'}}>{title}</span>
                </div>
            </div>
        </li>
    );

}
export default FilmCard;