import './App.css';
import Navbar from './components/navbar';
import FilmList from './components/filmList'


function App() {
  return (
    <div>
     <Navbar/>
     <FilmList/>
        <div className="footer">
            <p>Footer</p>
        </div>
    </div>
  );
}

export default App;
