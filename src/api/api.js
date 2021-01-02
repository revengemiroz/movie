import axios from 'axios';

const tmdbiApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    },
});

const genres = {
    getMoviesFromGenre: (params) =>
        axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=e9f2990250f1310ec6a644a89b5a2053&with_genres=${params}`
        ),
};

export { tmdbiApi, genres };
