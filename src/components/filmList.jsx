import React from "react";
import FilmCard from './filmCard'

const FilmList = () =>{

    return(
    <div>
        <div className='filmList'>
            <ul className='film_list'>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
            </ul>
        </div>
        <div className="footer">
            <p>Footer</p>
        </div>
    </div>
    );

}
export default FilmList;