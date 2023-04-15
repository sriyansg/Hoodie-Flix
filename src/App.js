import { useEffect, useState } from "react";


// 51feda35
import MovieCard from "./MovieCard";
import './App.css';

import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?apikey=51feda35&';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (searchTerm) => {
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Action');
    }, []);

    return (
        <div className="App">
            <div className="header">
            <h1>Hoodie-Flix</h1>
            </div>
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
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
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