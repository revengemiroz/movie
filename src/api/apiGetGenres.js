import React from "react";
import { useQuery } from "react-query";

function ApiGetGenres(props) {
  const {
    data = {},
    isLoading,
    error,
    isFetching,
    isFetched,
    isFetchedAfterMount,
  } = useQuery("genres", () =>
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e9f2990250f1310ec6a644a89b5a2053&language=en-US"
    ).then((res) => res.json())
  );

  return {
    isLoading,
    data,
    error,
    isFetching,
    isFetched,
    isFetchedAfterMount,
  };
}

export default ApiGetGenres;
