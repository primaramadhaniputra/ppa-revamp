import { Grid, JustifyContentType } from "@hudoro/neron";
import React, { useEffect, useState } from "react";
import { Link } from "utils/dummy";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import { getProfile } from "services/users";
import { notify } from "utils/functions";
import { Container, Wrapper } from "./styles";
import DeskTopSubMenu from "./DeskTopSubMenu";

interface IProps {
  position: "start" | "center" | "end";
}

export default function DesktopMenu({ position }: IProps) {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [userName, setUserName] = useState("");

  const handleActiveNavbar = (index: number) => {
    if (activeDropdown === index) {
      return setActiveDropdown(-1);
    }
    return setActiveDropdown(index);
  };

  useEffect(() => {
    getProfile({
      path: "profile",
    })
      .then((res) => setUserName(res.data.data.fullName))
      .catch((err) => notify(err.message, "error"));
  }, []);

  return (
    <Wrapper>
      <Container
        style={{ flex: 1 }}
        container
        justifyContent={position as JustifyContentType}
      >
        {Link.map((item, index) => (
          <Grid container key={index}>
            <Grid container gap={5}>
              <StyledTextDropdownUser
                title={item.title}
                handleClick={() => handleActiveNavbar(index)}
                styles={{ color: "white", fontSize: "15px" }}
              />
            </Grid>
            {
              <DeskTopSubMenu
                data={item.subMenu}
                isActive={activeDropdown === index}
              />
            }
          </Grid>
        ))}
      </Container>
      <Grid container gap={8} alignItems="center">
        <StyledTextDropdownUser user={{ name: userName }} />
      </Grid>
    </Wrapper>
  );
}
