import styled from "styled-components";

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  padding: 4rem 0;
  grid-gap: 4rem 2rem;
  border: 2px solid green;

  @media ${(props) => props.theme.mediaQueries.small} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
    justify-content: space-around;
    grid-gap: 4rem 1.5rem;
  }

  @media ${(props) => props.theme.mediaQueries.smaller} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
    grid-gap: 4rem 1rem;
  }
`;
