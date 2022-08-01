import React, { useState } from "react";
import {
  ArrowDown,
  DropdownMenuContainer,
  StyledInput,
  StyledLabel,
  Wrapper,
} from "./styles";

export default function StyledDropdownMenu() {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  const handleShowDropdownMenu = () => {
    setIsDropdownMenu(!isDropdownMenu);
  };

  return (
    <Wrapper>
      <StyledLabel>Dept</StyledLabel>
      <StyledInput onClick={handleShowDropdownMenu} />
      <ArrowDown />
      {isDropdownMenu && <DropdownMenuContainer>hello</DropdownMenuContainer>}
    </Wrapper>
  );
}
