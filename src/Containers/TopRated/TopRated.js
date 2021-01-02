import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';

import TopRatedApi from '../../api/TopRatedApi';

const TopRated = (props) => {
    const { data, error, isLoading } = TopRatedApi();

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
            <Header title="Top Rated" subtitle="movies" />
            {data && <MovieList movies={data} />}
        </div>
    );
};

export default TopRated;
