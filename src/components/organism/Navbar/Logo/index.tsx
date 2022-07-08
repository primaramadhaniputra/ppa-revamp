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
        <Avatar
          src="/images/ppa.jpg"
          size="m"
          style={{ height: "35px", width: "35px" }}
        />
      </Grid>
      <HamburgerWrapper>
        <Icon
          iconName="IcHamburger"
          size={32}
          color="white"
          style={{ cursor: "pointer" }}
          onClick={handleChangeHamburgerMenu}
        />
        <Grid container alignItems="center" gap={8}>
          <StyledTextDropdownUser user={{ name: "dani" }} />
        </Grid>
      </HamburgerWrapper>
    </LogoWrapper>
  );
}
