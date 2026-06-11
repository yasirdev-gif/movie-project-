import React from 'react'
import { useMovieContext } from '../context/FavoriteContext';
import MovieCard from '../components/MovieCard';
import '../css/Favorites.css'


const Favourites = () => {

    const { favorites } = useMovieContext()

    if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return <div className="favorites-empty">
        <h2>No favourite movies yet</h2>
        <p>start adding some!</p>
    </div>
  
}

export default Favourites