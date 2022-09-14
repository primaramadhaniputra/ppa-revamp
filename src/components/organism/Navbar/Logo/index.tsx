import { Avatar, Grid, Icon } from "@hudoro/neron";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import Router from "next/router";
import React, { useState } from "react";
import { HamburgerWrapper, LogoWrapper } from "./styles";

interface IProps {
  handleChangeHamburgerMenu: () => void;
}

export default function Logo({ handleChangeHamburgerMenu }: IProps) {
  const [isDropdownUser, setIsDropdownUser] = useState(false);
  const backTodashboard = () => {
    return Router.push("/dashboard");
  };
  return (
    <LogoWrapper container>
      <Grid>
        <Avatar
          src="/logo/ppa.jpg"
          size="m"
          onClick={backTodashboard}
          style={{ height: "35px", width: "35px", cursor: "pointer" }}
          alt="ppa logo"
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
          <StyledTextDropdownUser
            user={{ name: "dani" }}
            isDropdownUser={isDropdownUser}
            setIsDropdownUser={setIsDropdownUser}
          />
        </Grid>
      </HamburgerWrapper>
    </LogoWrapper>
  );
}
