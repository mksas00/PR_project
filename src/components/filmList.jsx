import FilmCard from './filmCard'
import React, {Component, useEffect,useState} from "react";
import axios from "axios";

const FilmList = () =>{

    const [movies,setMovies] = useState([]);
    const [isLoading,setloading] = useState(true)
    const [showFooter,setFooter] = useState(true)

    useEffect(() => {
        
        try{
            axios.get('https://pr-movies.herokuapp.com/api/movies').
            then(res =>
            {
                setMovies(res.data)
            })
            .then(
                setloading(false)
        
            ).
            then(console.log(movies));
        }
        catch(e)
        {
            console.log(e)
        }
        

    }, []);


   
    return(
    <div style={{backgroundColor: 'black', width:'100%'}}>
        <div className='filmList' style={{backgroundColor:'black'}}>
            <ul className='film_list'>
                {
                    movies.map(movie => {
                        return(
                            
                        <FilmCard key={movie.id} title={movie.title} image={movie.image} content={movie.content} id={movie.id} />
                        )
                        
                    })
                }
                
            </ul>
        </div>
       
            
        <div className="footer">
            <p>Footer</p>
        </div>
               
    </div>
    );


}
export default FilmList;