import React from "react";
import { useQuery } from "react-query";

function FetchPopularMovie(props) {
  console.log(process.env.REACT_APP_API_KEY);
  const { isLoading, error, data = {} } = useQuery("popularData", () =>
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e9f2990250f1310ec6a644a89b5a2053&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    ).then((res) => res.json())
  );

  return { isLoading, data, error };
}

export default FetchPopularMovie;
