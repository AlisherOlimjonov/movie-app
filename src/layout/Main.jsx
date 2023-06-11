import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=59ea4ff9&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=59ea4ff9&s=panda`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content container">
      <Search searchMovies={searchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}
