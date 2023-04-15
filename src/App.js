import { useEffect,useState } from "react";


// 51feda35
import MovieCard from "./MovieCard";
import './App.css';

import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?apikey=51feda35&';

const movie1 =
{
    "Title": "Spiderman the Verse",
    "Year": "2019",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');

    
    const searchMovies = async (searchTerm) => {
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="App">
            <h1>Susmita Movie's</h1>
            <div className="search">
                <input
                    placeholder="Search for a movie..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => { }}
                />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        { movies.map((movie) => (
                          <MovieCard movie={movie}/>  
                        ))}
            </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;