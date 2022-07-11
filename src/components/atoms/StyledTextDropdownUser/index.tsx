import { Avatar, Grid, Icon, IIconProps, Text } from "@hudoro/neron";
import React, { useState } from "react";
import DeskTopSubMenu from "src/components/organism/Navbar/DesktopMenu/DeskTopSubMenu";

import { HoverWrapper } from "./tyles";

interface IProps {
  title?: string;
  handleClick?: () => void;
  user?: {
    name: string;
  };
  iconName?: IIconProps["iconName"];
  styles?: React.CSSProperties;
}

export default function StyledTextDropdownUser({
  title,
  handleClick,
  user,
  iconName = "IcArrowDown",
  styles,
}: IProps) {
  const [isUserDropdwon, setIsUserDropdwon] = useState(false);

  const handleUserDropdwon = () => {
    return setIsUserDropdwon(!isUserDropdwon);
  };

  return (
    <>
      {user?.name ? (
        <Grid container alignItems="center" gap={5}>
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
              { subMenuTitle: "Pengaturan", subMenuLink: "dani" },
              { subMenuTitle: "Logout", subMenuLink: "dani" },
            ]}
            isActive={isUserDropdwon}
            style={{ transform: "translateX(-40px)" }}
            width="120px"
          />
        </Grid>
      ) : (
        <HoverWrapper>
          <Text variant="h4" style={{ ...styles }}>
            {title}
          </Text>
          <Icon iconName={iconName} color="white" onClick={handleClick} />
        </HoverWrapper>
      )}
    </>
  );
}
