import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import { Link } from "utils/dummy";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import { Wrapper } from "./styles";
import DeskTopSubMenu from "./DeskTopSubMenu";

export default function DesktopMenu() {
  const [activeDropdown, setActiveDropdown] = useState(-1);

  const handleActiveNavbar = (index: number) => {
    if (activeDropdown === index) {
      return setActiveDropdown(-1);
    }
    return setActiveDropdown(index);
  };

  return (
    <Wrapper>
      {Link.map((item, index) => (
        <Grid container key={index}>
          <Grid container gap={8}>
            <StyledTextDropdownUser
              user={false}
              title={item.title}
              handleClick={() => handleActiveNavbar(index)}
              styles={{ color: "white" }}
            />
          </Grid>
          {activeDropdown === index && <DeskTopSubMenu data={item.subMenu} />}
        </Grid>
      ))}
      <Grid container gap={8} alignItems="center">
        <StyledTextDropdownUser user={true} />
        {/* <Avatar src='/images/tukang.jpg' size='l' />
            <Icon iconName='IcArrowDown' color='white' /> */}
      </Grid>
    </Wrapper>
  );
}
