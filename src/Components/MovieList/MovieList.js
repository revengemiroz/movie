import React, { Fragment } from "react";

import Sidebar from "../Sidebar/sidebar";
import Card from "../Card/Card";

import { MoviesWrapper } from "./style";

import { IMAGE_BASE_URL } from "../../configuration";

function MovieList({ movies }) {
  if (!movies) {
    return null;
  }

  return (
    <div>
      <MoviesWrapper>
        {movies.map((a, i) => (
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
