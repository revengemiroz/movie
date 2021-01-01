import { useQuery } from 'react-query';
import tmdbiApi from './api/api';

const FetchPopularMovie = () =>
    useQuery('popularMovies', async () => {
        const { data } = await tmdbiApi.get(`discover/movie`);
        return data;
    });

export default FetchPopularMovie;
