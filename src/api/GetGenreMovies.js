import { useQuery } from 'react-query';
import { genres } from '../api/api';

const GetGenreMovies = (id) =>
    useQuery(
        ['genreMovies', id],
        async () => {
            const { data } = await genres.getMoviesFromGenre(id);
            return data;
        },
        {
            enabled: !!id,
            keepPreviousData: true,
        }
    );
export default GetGenreMovies;
