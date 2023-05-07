import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieService';
import LoadingComponent from '../components/LoadingComponent';
import SearchComponent from '../components/SearchComponent';
import ErrorComponent from '../components/ErrorComponent';

const MoviesList = () => {
  // Define state variables
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  // Fetch movies from API using useEffect hook
  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Filter movies based on search keyword
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(keyword.toLowerCase())
  );

  // Handle search keyword change
  const handleSearch = (value) => {
    setKeyword(value);
  };

  // Render loading component if movies are still loading
  if (isLoading) {
    return <LoadingComponent />;
  }

  // Render error component if there was an error fetching movies
  if (error) {
    return <ErrorComponent message={error} />;
  }

  // Render movies list
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex justify-between mb-5">
            <h1 className="text-3xl font-bold text-white mb-4">Movies</h1>
            <SearchComponent setKeyword={handleSearch} />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-10">
            {filteredMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
