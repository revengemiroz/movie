import React from "react";
import { Title, SubTitle, HeaderWrapper } from "./style";

function Header({ title, subtitle, size }) {
  return (
    <HeaderWrapper>
      <Title size={size}>{title}</Title>
      <SubTitle size={size}>{subtitle}</SubTitle>
    </HeaderWrapper>
  );
}

export default Header;
