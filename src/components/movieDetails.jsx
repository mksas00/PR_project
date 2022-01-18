import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";


const MovieDetails = () =>{

    const location = useLocation()
    console.log('xd')
    console.log(location.state)
    const { movieId } = location.state 
    const [movie,setMovie] = useState([])


    useEffect(() => {
        
        try{
            axios.get('https://pr-movies.herokuapp.com/api/movies/' + movieId).
            then(res =>
            {
                setMovie(res.data)
            })
            .then(console.log(movie));
        }
        catch(e)
        {
            console.log(e)
        }
        

    }, []);


    return(
        <div style={{backgroundColor:'black', flex:1}}>
            <div style={{display:'flex', justifyContent:'center' , flexDirection:'row', margin:150, padding:70, backgroundColor:'#1a1a1c'}}> 
                <img className='filmImage' src={movie.image} style={{height:400,width:300}}></img>
                <div className="filmDetailsDiv" style={{display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start', flexDirection:'column', paddingLeft:40}}> 
                    <h5 style={{color:'white'}}>Title: {movie.title}</h5>
                    <h5 style={{color:'white'}}>Year of production: -</h5>
                    <h5 style={{color:'white'}}>Director: -</h5>
                    <h5 style={{color:'white'}}>Genre: -</h5>
                    <h5 style={{color:'white'}}>Storyline: </h5>
                    <spam style={{color:'white'}}>{movie.content}
                    </spam>
                </div>
            </div>
        </div>

    );
}
export default MovieDetails;






