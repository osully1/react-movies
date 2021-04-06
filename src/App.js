import { useEffect, useState } from 'react';

import './App.css';
import { getCurrentMovies } from './services/movie-api'
import MovieGrid from './components/MovieGrid/MovieGrid'

function App() {

  const [ movieData, setMovieData ] = useState([]);

  async function getAppData() {
    const data = await getCurrentMovies();
    setMovieData(data.results);
  }
  
  useEffect(() => {
    getAppData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Now Playing</h1>
        <div className="movie-grid">
          <MovieGrid currentMovieData={movieData} />
        </div>
      </header>
    </div>
  );
}

export default App;
