import { Avatar, Grid, Icon, IIconProps, Text } from "@hudoro/neron";
import React from "react";
import DeskTopSubMenu from "src/components/organism/Navbar/DesktopMenu/DeskTopSubMenu";
import { useWindowSize } from "utils/customHooks";

import { HoverWrapper, StyledUserName } from "./styles";

interface IProps {
  title?: string;
  handleClick?: () => void;
  user?: {
    name: string;
  };
  iconName?: IIconProps["iconName"];
  styles?: React.CSSProperties;
  isDropdownUser?: boolean;
  setIsDropdownUser?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StyledTextDropdownUser({
  title,
  handleClick,
  user,
  iconName = "IcArrowDown",
  styles,
  isDropdownUser,
  setIsDropdownUser,
}: IProps) {
  const handleUserDropdwon = () => {
    return setIsDropdownUser && setIsDropdownUser(!isDropdownUser);
  };
  const { width } = useWindowSize();
  return (
    <>
      {user?.name ? (
        <Grid container alignItems="center" gap={7}>
          <StyledUserName>{user?.name}</StyledUserName>
          <Avatar
            src="/images/tukang.jpg"
            size="m"
            style={{ height: "35px", width: "35px" }}
          />
          <Icon
            iconName={iconName}
            color="white"
            style={{ cursor: "pointer" }}
            onClick={handleUserDropdwon}
          />
          <DeskTopSubMenu
            data={[
              { subMenuTitle: "Pengaturan", subMenuLink: "pengaturan" },
              { subMenuTitle: "Logout", subMenuLink: "" },
            ]}
            isActive={isDropdownUser as boolean}
            style={{
              transform: width > 1024 ? "translateX(0px)" : "translateX(-40px)",
            }}
            width="120px"
          />
        </Grid>
      ) : (
        <HoverWrapper onClick={handleClick}>
          <Text variant="h4" style={{ ...styles }}>
            {title}
          </Text>
          <Icon iconName={iconName} color="white" />
        </HoverWrapper>
      )}
    </>
  );
}
