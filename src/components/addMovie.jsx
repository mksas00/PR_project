import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const AddMovie = () =>{

  const[movieName, setMovieName] = useState("")
  const[movieImage, setMovieImage] = useState("")
  const[movieDescription, setMovieDescription] = useState("")
  let navigate = useNavigate();


  const handleSubmit = (evt) =>{

   
    evt.preventDefault();


    axios.post('https://pr-movies.herokuapp.com/api/movies', {
        title: movieName,
        image: movieImage,
        content: movieDescription
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    console.log(movieName)
    console.log(movieImage)
    console.log(movieDescription)
    navigate("/")
  
    
    
  }
    
        return (
            <div style={{backgroundColor:'black', flex:1}}>
            <div style={{ justifyContent: 'center',  flex:1, padding: 0, marginTop:50, paddingLeft:'13%',paddingRight:'21%'}}>
                <h1 style={{marginTop:50, color:'white'}}>Add Movie</h1>
                <form onSubmit={handleSubmit} >
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="movie_name" style={{color:'white'}}>Movie name</label>
                        <input 
                               name="movie_name"
                               onChange={e=>{setMovieName(e.target.value)}}
                               type="text"
                               className="form-control"
                               id="movie_name"
                               aria-describedby="emailHelp"
                               placeholder="Movie Title"/>
        
                    </div>
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="movie_image" style={{color:'white'}}>Link to movie poster</label>
                        <input 
                               name="movie_image"
                               onChange={e=>{setMovieImage(e.target.value)}}
                               type="text"
                               className="form-control"
                               id="movie_image"
                               placeholder="Link to movie image"/>
                        
                    </div>
                    <div class="form-group" style={{paddingTop: 10}}>
                        <label for="exampleFormControlTextarea1" style={{color:'white'}}>Movie description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            placeholder="Movie description"
                            onChange={e=>{setMovieDescription(e.target.value)}}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "white",marginTop:20, height: '30%',color:'black'} }>Add Movie</button>
                </form>

            </div>
          </div>  
        );
   



}

export default AddMovie


 