import React, { useState } from "react";
import FetchPopularMovie from "../fetchPopularMovie";

import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";

function Discover(props) {
  const { data, isLoading, error } = FetchPopularMovie();
  console.log(data);
  if (isLoading) return <h1>loading</h1>;

  if (error) return <h1>error + {error.message}</h1>;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Header title="movies" subtitle="movies" />
      <MovieList movies={data} />
    </div>
  );
}

export default Discover;
