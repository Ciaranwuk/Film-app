import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=9f0cb83"

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  );
}

export default App;
