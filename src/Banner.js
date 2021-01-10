import React, { useState, useEffect } from "react";
import "./Banner.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import requests from "./requests";

const baseUrl = "https://api.themoviedb.org/3";
const poster_url = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${baseUrl}${requests.fetchNetflixOriginals}`
      );
      // console.log(response);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);
  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${poster_url}${movie?.backdrop_path})`,
        backgroundPosition: "auto",
      }}
    >
      <div className="banner_content">
        <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
        <div className="banner_button">
          <Button variant="contained">Play</Button>
          <Button variant="contained">My List</Button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
