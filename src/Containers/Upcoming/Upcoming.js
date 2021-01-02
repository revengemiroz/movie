import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';

import UpcomingApi from '../../api/UpcomingApi';

const Upcoming = (props) => {
    const { data, error, isLoading } = UpcomingApi();

    if (isLoading) {
        <p>loading</p>;
    }

    if (error) {
        console.log('🔥', error);
    }

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Header title="Upcoming" subtitle="movies" />
            {data && <MovieList movies={data} />}
        </div>
    );
};

export default Upcoming;
