import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';

const MovieDetails = () => {
  // Get the "id" parameter from the URL
  const { id } = useParams();

  // Define the state variables for the component
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Fetch the movie details when the component mounts or when the "id" parameter changes
  useEffect(() => {
    getMovieDetails(id)
      .then(data => setMovie(data))
      .catch(error => setError(error.message));
  }, [id]);

  // If there is an error, render the ErrorComponent with the error message
  if (error) {
    return <ErrorComponent message={error} />;
  }

  // If the movie is not yet loaded, render the LoadingComponent
  if (!movie) {
    return <LoadingComponent />;
  }

  // Render the movie details
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-12 sm:px-6 lg:px-8">
      <button className="bg-gray-800 text-white rounded-lg px-3 py-2 mb-4" onClick={() => navigate('/')}>Back to movies</button>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-full w-full object-cover md:w-64" src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.Genre}</div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">{movie.Title}</h2>
            <div className="flex flex-wrap justify-between mt-4">
              <div className="w-full md:w-1/3">
                <div className="text-gray-500 font-semibold">Rating:</div>
                <div className="text-3xl text-white font-bold">{movie.imdbRating}</div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="text-gray-500 font-semibold">Runtime:</div>
                <div className="text-3xl text-white font-bold">{movie.Runtime}</div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="text-gray-500 font-semibold">Year:</div>
                <div className="text-3xl text-white font-bold">{movie.Year}</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="text-gray-500 font-semibold mb-2">Plot:</div>
              <p className="text-gray-300">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails
