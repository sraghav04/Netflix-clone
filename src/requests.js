const Api_key = "b2f3c6500189e368f71dc0400e8b0349";
// const Base_url = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchActionMovie: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetchAllGenre: `/discover/movie?api_key=${Api_key}&with_genres=18`,
};

export default requests;
