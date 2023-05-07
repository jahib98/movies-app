import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a movie card component with title, poster, and year information.
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.movie - The movie object to be rendered in the card component.
 * @param {string} props.movie.imdbID - The imdbID of the movie.
 * @param {string} props.movie.Poster - The URL of the movie poster image.
 * @param {string} props.movie.Title - The title of the movie.
 * @param {string} props.movie.Year - The year the movie was released.
 * 
 * @returns {JSX.Element} Returns the movie card component with the provided movie information.
 */

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <li
      key={movie.imdbID}
      onClick={() => navigate(`/movie/details/${movie.imdbID}`)}
      className="relative bg-white overflow-hidden rounded-md cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="object-cover object-center h-64 w-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center px-4 py-3">
        <h2 className="text-lg font-semibold text-white mb-2">{movie.Title}</h2>
        <p className="text-sm text-gray-300">{movie.Year}</p>
      </div>
    </li>
  );
};

export default MovieCard;
