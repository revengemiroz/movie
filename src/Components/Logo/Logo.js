import React from "react";

import { LinkWrapper, LogoWrapper } from "./style";
import LogoSvg from "../../svg/logo.svg";

function Logo(props) {
  return (
    <LinkWrapper to={process.env.PUBLIC_URL + "/"}>
      <LogoWrapper src={LogoSvg} />
    </LinkWrapper>
  );
}

export default Logo;
