import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import MovieList from "../../Components/MovieList/MovieList";

function Search(props) {
  const { searchName } = useParams();

  const { data, isLoading, error, isFetching } = useQuery("get", () =>
    fetch(
      `https://api.themoviedb.org/3/search/company?api_key=e9f2990250f1310ec6a644a89b5a2053&query=${searchName}&page=1`
    ).then((res) => res.json())
  );

  return <div>{searchName}</div>;
}

export default Search;
