import { useQuery } from 'react-query';
import tmdbiApi from '../api/api';

const TopRatedApi = () =>
    useQuery('getTopRated', async () => {
        const { data } = await tmdbiApi.get(`/movie/top_rated`);
        return data;
    });

export default TopRatedApi;
