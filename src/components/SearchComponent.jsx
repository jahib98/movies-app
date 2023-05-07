import React from "react";

/**
 * Renders a search input component to allow users to search for movies.
 * @param {Object} props - The component props.
 * @param {function} props.setKeyword - A function to set the search keyword.
 * @returns {JSX.Element} - Returns the search input component.
 */

const SearchComponent = ({ setKeyword }) => {
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Search movies
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search movies"
        onChange={handleChange}
        className="w-full h-10 pl-4 pr-10 rounded-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchComponent;
