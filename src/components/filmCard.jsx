import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";


const FilmCard = () =>
{
    return(
        <li className='filmcard'>
            <div className='filmcard_div'>
                <img className='filmImage' src="https://static.posters.cz/image/750/plakaty/avengers-endgame-journey-s-end-i73600.jpg">
                </img>
                <span style={{margin:10}}>Tytuł filmu</span>
                <span style={{margin:10}}>Opis filmu</span>
            </div>
        </li>
    );

}
export default FilmCard;