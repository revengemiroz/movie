import React from 'react';
import StickyBox from 'react-sticky-box';

import ApiGetGenres from '../../api/GetGenresApi';

import Logo from '../Logo/Logo';

import MenuItem from '../MenuItem/MenuItem';

import { Wrapper, Heading, LinkWrap } from './style';

const staticGenre = ['Popular', 'Top Rated', 'Upcoming'];

function Sidebar(props) {
    const { data: genreData, isLoading, error } = ApiGetGenres();

    if (isLoading) return <p>loading</p>;

    if (error) return <p>error</p>;

    return (
        <StickyBox>
            <Wrapper>
                <Logo />
                <Heading>Discover</Heading>
                {renderStaticGenres(staticGenre)}
                <Heading>Genres</Heading>
                {renderDynamicGenres(genreData)}
            </Wrapper>
        </StickyBox>
    );
}

function renderStaticGenres(staticGenres, selected) {
    return staticGenres.map((a, i) => (
        <LinkWrap key={i}>
            <MenuItem selected={selected}>{a}</MenuItem>
        </LinkWrap>
    ));
}

function renderDynamicGenres({ genres }, selected) {
    return genres.map((a, i) => (
        <LinkWrap key={i} to={'/genres/' + a.name}>
            <MenuItem selected={selected}>{a.name}</MenuItem>
        </LinkWrap>
    ));
}

export default Sidebar;
