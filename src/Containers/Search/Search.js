import React from "react";
import { useParams } from "react-router-dom";

import { ApiSearchMovies } from "../../api/apiSearchMovies";

import Header from "../../Components/Header/Header";
import MovieList from "../../Components/MovieList/MovieList";

function Search(props) {
  const { searchName } = useParams();

  const { data, isLoading, error } = ApiSearchMovies(searchName);
  console.log("✅", data);

  if (isLoading) {
    <p>loading</p>;
  }

  if (error) {
    console.log("🔥", error);
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Header title="movies" subtitle="movies" />
      {data && <MovieList movies={data.results} />}
    </div>
  );
}

export default Search;
