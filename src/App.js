import './App.css';
import { Routes,Route,Navigate, Redirect, Outlet} from 'react-router-dom';
import Navbar from './components/navbar';
import FilmList from './components/filmList'
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import MovieDetails from './components/movieDetails';
import AddMovie from './components/addMovie';
import {isExpired} from 'react-jwt'


function App() {


  const AuthWrapper = () =>{
    return isExpired(localStorage.getItem('token')) ? <Navigate to="/login" replace/> : <Outlet/>
  };

  return (
    <div style={{display:'flex', flexDirection:'column', height:'100vh'}}>
      <Navbar/>
      <div style={{display:'flex', flex:1}}>
        <Routes>
          <Route path="/login" element ={<LoginForm/>} />
          <Route path="/signUp" element ={<SignUpForm/>} />
          <Route element={<AuthWrapper/>}>
            <Route path="/addMovie" element= {<AddMovie/>} />
          </Route>
          <Route element={<AuthWrapper/>}>
            <Route path="/" element={<FilmList/>}/>
          </Route>
          <Route path="/details" exact element ={<MovieDetails/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


{ <Route path="/" 
render={props=>{
  if(isExpired(localStorage.getItem('token'))){
    return <Navigate to='/login'/>;
  }
  return <FilmList/>
}}
/> }