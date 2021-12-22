import './App.css';
import { Routes,Route,Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import FilmList from './components/filmList'
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import MovieDetails from './components/movieDetails';

function App() {



  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Navbar/>
      <div style={{display:'flex', flex:1}}>
        <Routes>
          <Route path="/login" element ={<LoginForm/>} />
          <Route path="/signUp" element ={<SignUpForm/>} />
          <Route path="/" exact element ={<FilmList/>} />
          <Route path="/add" exact element ={<FilmList/>} />
          <Route path="/details" exact element ={<MovieDetails/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
