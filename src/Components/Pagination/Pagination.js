import { scroller } from 'react-scroll';

import { Wrapper, WrapperLink } from './style';

const Pagination = ({ movies }) => {
    const { page, total_pages } = movies;
    console.log(page, total_pages);
    if (movies.total_pages === 1) {
        return null;
    }

    return (
        <Wrapper justify="last">
            <WrapperLink to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
                Page {page}
            </WrapperLink>
            <WrapperLink>Page 3</WrapperLink>
        </Wrapper>
    );
};

export default Pagination;
