import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

const baseUrl = "https://api.themoviedb.org/3";
const poster_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${baseUrl}${fetchUrl}`);
      // console.log(response);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  //Movie player setting options
  // const opts = {
  //   height: "420",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${poster_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
