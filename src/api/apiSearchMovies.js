import { useQuery } from "react-query";

export const ApiSearchMovies = (searchQuery) => {
  console.log(searchQuery);
  const { data, isLoading, error } = useQuery(
    ["searchMovies", searchQuery],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&page=1`
      ).then((res) => res.json())
  );
  return { data, isLoading, error };
};
