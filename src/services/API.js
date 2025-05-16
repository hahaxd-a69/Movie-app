const API_KEY = "6446eb42";
const BASE_URL = "https://www.omdbapi.com";

export const getPopularMovie = async () => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=Avengers`);
  const data = await response.json();

  if (!data.Search) {
    throw new Error(data.Error || "Failed to load popular movies.");
  }

  return data.Search;
};

export const searchMovie = async (query) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  if (!data.Search) {
    throw new Error(data.Error || "Movie not found.");
  }

  return data.Search;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to load movie details.");
  }

  return data;
};
