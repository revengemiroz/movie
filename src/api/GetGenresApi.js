import { useQuery } from 'react-query';
import { tmdbiApi } from './api';

const GetGenresApi = () =>
    useQuery('getGenres', async () => {
        const { data } = await tmdbiApi.get(`/genre/movie/list`);
        return data;
    });

export default GetGenresApi;
