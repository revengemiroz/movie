import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;
`;

export const LogoWrapper = styled.img`
  max-width: 75%;
`;
