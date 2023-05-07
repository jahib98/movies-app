const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = async () => {
  const url = `http://www.omdbapi.com/?s=batman&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      return data.Search;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
