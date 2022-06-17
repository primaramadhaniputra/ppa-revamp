import { Grid } from "@hudoro/neron";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import React, { useRef, useState } from "react";
import { MenuContainer, SubMenu, SubMenuText, SubMenuWrapper } from "./styles";

interface IProps {
  item: {
    title: string;
    subMenu: string[];
  };
}

export default function HamburgerMenu({ item }: IProps) {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const subMenuRef = useRef<any>(null);
  const handleSubMenu = () => {
    const { height } = subMenuRef.current.getBoundingClientRect();
    if (subMenuHeight < 1) {
      setSubMenuHeight(height);
    } else {
      setSubMenuHeight(0);
    }
    setIsShowSubMenu(!isShowSubMenu);
  };
  return (
    <MenuContainer container gap={10} flexDirection="column">
      <Grid container gap={8}>
        {/* <Text variant="h4" style={{ color: 'white' }}>{item.title}</Text>
            <Icon iconName={isShowSubMenu ? "IcArrowUp" : "IcArrowDown"} color="white" onClick={handleSubMenu} /> */}
        <StyledTextDropdownUser
          user={false}
          title={item.title}
          handleClick={handleSubMenu}
          iconName={isShowSubMenu ? "IcArrowUp" : "IcArrowDown"}
        />
      </Grid>
      <SubMenuWrapper height={subMenuHeight}>
        <SubMenu ref={subMenuRef}>
          {item.subMenu.map((data, index) => (
            <SubMenuText key={index} variant="h4">
              {" "}
              {data}
            </SubMenuText>
          ))}
        </SubMenu>
      </SubMenuWrapper>
    </MenuContainer>
  );
}
