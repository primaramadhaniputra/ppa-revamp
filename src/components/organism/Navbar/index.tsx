import { Avatar } from "@hudoro/neron";
import TextDropdown from "molecules/TextDropdown";
import React, { useState } from "react";
import { Link } from "utils/dummy";
import {
  LinkWrapper,
  LogoWrapper,
  StyledUserContainer,
  StyledUserContainerDesktop,
  Wrapper,
} from "./styles";

export default function Navbar() {
  const [activeDropdown, setactiveDropdown] = useState(-1);
  return (
    <Wrapper container gap={20}>
      <LogoWrapper container alignItems="center" justifyContent="space-between">
        <Avatar size="m" src="/favicon.ico" />
        <StyledUserContainer>
          <TextDropdown user={true}>Orang</TextDropdown>
        </StyledUserContainer>
      </LogoWrapper>
      <LinkWrapper gap={10}>
        {Link.map((item, index) => (
          <TextDropdown
            user={false}
            key={index}
            dropDownData={item.subMenu}
            activeDropdown={activeDropdown}
            setactiveDropdown={setactiveDropdown}
            index={index}
          >
            {item.title}
          </TextDropdown>
        ))}
        <StyledUserContainerDesktop>
          <TextDropdown user={true}>Orang</TextDropdown>
        </StyledUserContainerDesktop>
      </LinkWrapper>
    </Wrapper>
  );
}
