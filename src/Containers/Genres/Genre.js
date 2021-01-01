import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Header from "../../Components/Header/Header";
import MovieList from "../../Components/MovieList/MovieList";
import Sidebar from "../../Components/Sidebar/sidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";

import apiGetGenres from "../../api/apiGetGenres";

function Genre(props) {
  const { name } = useParams();

  const {
    data: genreData,
    isLoading: genreLoading,
    error: genreError,
    isFetching: genreFetching,
    isFetched,
  } = apiGetGenres();

  useEffect(() => {}, [name]);

  let genreDatas = {};

  if (isFetched) {
    const result = genreData.genres.map((a) => a.name).indexOf(name);
    if (result > -1) {
      const datas = genreData.genres.find((a) => a.name === name);
      genreDatas = datas;
    } else {
      //redirect to error page
      genreDatas = { id: 28, name: "Action" };
    }
  }

  const id = genreDatas.id;

  const { isLoading, error, data = {}, isFetching } = useQuery(
    ["genreMovies", genreData?.genres],
    () =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=e9f2990250f1310ec6a644a89b5a2053&with_genres=${id}`
      ).then((res) => res.json()),
    {
      enabled: genreData,
    }
  );

  if (isLoading) return <p>loading</p>;

  if (error) return <p>error</p>;

  return (
    <div>
      <SearchBar />
      {!isLoading && <MovieList movies={data}></MovieList>}
      <Sidebar />

      <Header title={name} subtitle="movies"></Header>
    </div>
  );
}

export default Genre;
