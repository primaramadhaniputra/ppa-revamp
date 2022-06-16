import { Avatar, Icon } from "@hudoro/neron";
import TextDropdown from "src/components/organism/Navbar/TextDropdown";
import React, { useState } from "react";
import { Link } from "utils/dummy";
import { colors } from "utils/styles";
import {
  LogoWrapper,
  StyledUserContainer,
  StyledUserContainerDesktop,
  Wrapper,
  WrapperIconHamburger,
} from "./styles";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [activeDropdown, setactiveDropdown] = useState(0);
  const [dropDownHeight, setDropDownHeight] = useState(0);

  const handleDropdown = () => {
    if (dropDownHeight < 1) {
      return setDropDownHeight(220 + 40);
    }
    return setDropDownHeight(0);
  };

  return (
    <Wrapper container>
      <LogoWrapper container alignItems="center" justifyContent="space-between">
        <Avatar size="m" src="/images/ppa.jpg" />
        <StyledUserContainer>
          <TextDropdown user={true} />
        </StyledUserContainer>
      </LogoWrapper>
      <Dropdown
        Link={Link}
        dropDownHeight={dropDownHeight}
        activeDropdown={activeDropdown}
        setactiveDropdown={setactiveDropdown}
      />
      <StyledUserContainerDesktop>
        <TextDropdown user={true} />
      </StyledUserContainerDesktop>
      <WrapperIconHamburger>
        <Icon
          iconName={dropDownHeight > 0 ? "IcClose" : "IcArrowDown"}
          color={colors.white}
          onClick={handleDropdown}
        />
      </WrapperIconHamburger>
    </Wrapper>
  );
}
