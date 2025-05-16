import React from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = React.useState([]);
  React.useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  return (
    <div className="favorites">
      <h2>
        {favorites.length === 0 && ""}
        {favorites.length === 1 && "Your favorite Movie"}
        {favorites.length > 1 && "Your favorite Movies"}
      </h2>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
