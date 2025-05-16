import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.imdbID === movie.imdbID));
  }, [movie.imdbID]);
  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      alert(`${movie.Title} removed from favorites.`);
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      alert(`${movie.Title} added to favorites.`);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <Link to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} alt={movie.Title} />
        </Link>
      </div>
      <h3>{movie.Title}</h3>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default MovieCard;
