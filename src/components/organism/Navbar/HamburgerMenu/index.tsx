import { Grid } from "@hudoro/neron";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import React, { useRef, useState } from "react";
import { MenuContainer, SubMenu, SubMenuText, SubMenuWrapper } from "./styles";

interface IProps {
  item: {
    title: string;
    subMenu: {
      subMenuTitle: string;
      subMenuLink: string;
    }[];
  };
}

export default function HamburgerMenu({ item }: IProps) {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLInputElement>(null);
  const handleSubMenu = () => {
    const height = subMenuRef?.current?.getBoundingClientRect().height;
    if (subMenuHeight < 1) {
      setSubMenuHeight(height as number);
    } else {
      setSubMenuHeight(0);
    }
    setIsShowSubMenu(!isShowSubMenu);
  };
  return (
    <MenuContainer container gap={1} flexDirection="column">
      <Grid container gap={8}>
        <StyledTextDropdownUser
          title={item.title}
          handleClick={handleSubMenu}
          iconName={isShowSubMenu ? "IcArrowUp" : "IcArrowDown"}
          styles={{ color: "white", fontSize: "14px", marginBottom: 10 }}
        />
      </Grid>
      <SubMenuWrapper height={subMenuHeight}>
        <SubMenu ref={subMenuRef}>
          {item.subMenu.map((data, index) => (
            <SubMenuText key={index} variant="h4">
              {" "}
              {data.subMenuTitle}
            </SubMenuText>
          ))}
        </SubMenu>
      </SubMenuWrapper>
    </MenuContainer>
  );
}
