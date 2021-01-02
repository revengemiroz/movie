import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import Sidebar from '../../Components/Sidebar/sidebar';
import SearchBar from '../../Components/SearchBar/SearchBar';

import GetGenresApi from '../../api/GetGenresApi';
import GetGenreMovies from '../../api/GetGenreMovies';

function Genre(props) {
    const { name } = useParams();

    const {
        data: genreData,
        isLoading: genreLoading,
        error: genreError,
    } = GetGenresApi();

    let genreDatas = {};

    if (genreData) {
        const result = genreData.genres.map((a) => a.name).indexOf(name);
        if (result > -1) {
            const datas = genreData.genres.find((a) => a.name === name);
            genreDatas = datas;
        } else {
            //redirect to error page
            genreDatas = { id: 28, name: 'Action' };
        }
    }

    const id = genreDatas.id;

    const { data, isLoading, error } = GetGenreMovies(id);

    if (isLoading) return <p>loading</p>;

    if (error) return <p>error</p>;

    return (
        <div>
            <SearchBar />
            {data && <MovieList movies={data}></MovieList>}
            <Sidebar />

            <Header title={name} subtitle="movies"></Header>
        </div>
    );
}

export default Genre;
