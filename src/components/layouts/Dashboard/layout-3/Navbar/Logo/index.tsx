import { Avatar, Grid, Icon } from "@hudoro/neron";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import React from "react";
import { HamburgerWrapper, LogoWrapper } from "./styles";

interface IProps {
  handleChangeHamburgerMenu: () => void;
}

export default function Logo({ handleChangeHamburgerMenu }: IProps) {
  return (
    <LogoWrapper container>
      <Grid>
        <Avatar src="/images/ppa.jpg" size="l" />
      </Grid>
      <HamburgerWrapper>
        <Icon
          iconName="IcHamburger"
          size={32}
          color="white"
          style={{ cursor: "pointer" }}
          onClick={handleChangeHamburgerMenu}
        />
        {/* <Grid container alignItems="center" gap={8}>
               <Avatar src="/images/tukang.jpg" size="l" />
               <Icon iconName="IcArrowDown" color="white" />
            </Grid> */}
        <Grid container alignItems="center" gap={8}>
          <StyledTextDropdownUser user={true} />
        </Grid>
      </HamburgerWrapper>
    </LogoWrapper>
  );
}
