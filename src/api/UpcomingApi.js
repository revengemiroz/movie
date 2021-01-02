import { useQuery } from 'react-query';

import { tmdbiApi } from '../api/api';

const UpcomingApi = (props) =>
    useQuery('upcoming', async () => {
        const { data } = await tmdbiApi.get(`movie/upcoming/`);
        return data;
    });

export default UpcomingApi;
