import React, { Fragment } from "react";

import Sidebar from "../Sidebar/sidebar";
import Card from "../Card/Card";

import { MoviesWrapper } from "./style";

import { IMAGE_BASE_URL } from "../../configuration";

function MovieList({ movies }) {
  if (movies.results.length === 0) {
    return null;
  }

  return (
    <div>
      <MoviesWrapper>
        {movies.results.map((a, i) => (
          <Card
            key={i}
            img={IMAGE_BASE_URL + "w342" + a.poster_path}
            movieTitle={a.title}
          ></Card>
        ))}
      </MoviesWrapper>
    </div>
  );
}

export default MovieList;
