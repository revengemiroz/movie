import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { StyledItem } from "./style";

function MenuItem({ selected, children }) {
  return (
    <StyledItem selected={selected}>
      <RiMovie2Line size="20px" style={{ marginRight: "10px" }} />
      {children}
    </StyledItem>
  );
}

export default MenuItem;
