import { Grid, Text } from "@hudoro/neron";
import React, { useState } from "react";
import { Link } from "utils/dummy";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import { Container, Wrapper } from "./styles";
import DeskTopSubMenu from "./DeskTopSubMenu";

interface IProps {
  type?: string;
}

export default function DesktopMenu({ type }: IProps) {
  const [activeDropdown, setActiveDropdown] = useState(-1);

  const handleActiveNavbar = (index: number) => {
    if (activeDropdown === index) {
      return setActiveDropdown(-1);
    }
    return setActiveDropdown(index);
  };

  return (
    <Wrapper>
      <Container
        style={{
          flex: `${type === "layout3" || type === "layout1" ? 1 : null}`,
        }}
        justifyContent={type === "layout1" ? "flex-end" : "center"}
        container
      >
        {Link.map((item, index) => (
          <Grid container key={index}>
            <Grid container gap={8}>
              <StyledTextDropdownUser
                title={item.title}
                handleClick={() => handleActiveNavbar(index)}
                styles={{ color: "white" }}
              />
            </Grid>
            {activeDropdown === index && <DeskTopSubMenu data={item.subMenu} />}
          </Grid>
        ))}
      </Container>
      <Grid container gap={8} alignItems="center">
        {type !== "layout1" && (
          <Text variant="h4" style={{ color: "white" }}>
            Suwito
          </Text>
        )}
        <StyledTextDropdownUser user={{ name: "dani" }} />
      </Grid>
    </Wrapper>
  );
}
