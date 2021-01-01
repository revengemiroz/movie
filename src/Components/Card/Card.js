import React, { useState } from "react";
import {
  MovieWrapper,
  MovieImg,
  Title,
  DetailsWrapper,
  RatingsWrapper,
  Tooltip,
} from "../Card/style";
import NothingSvg from "../../svg/nothing.svg";

function Card({ img, movieTitle, ratings, children }) {
  const [loading, setLoading] = useState(false);
  return (
    <MovieWrapper>
      {loading ? (
        <span>loading</span>
      ) : (
        // 1. if img loads set loader to false
        // 2. if img fails to load show a failed img poster
        <MovieImg
          src={img}
          onLoad={() => setLoading(false)}
          onError={(e) => (e.target.src = NothingSvg)}
        />
      )}

      <DetailsWrapper>
        <Title>{movieTitle}</Title>
        <RatingsWrapper></RatingsWrapper>
      </DetailsWrapper>
    </MovieWrapper>
  );
}

export default Card;
