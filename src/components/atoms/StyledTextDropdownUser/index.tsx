import { Avatar, Grid, Icon, IIconProps, Text } from "@hudoro/neron";
import React from "react";
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
  return (
    <>
      {user?.name ? (
        <Grid container alignItems="center" gap={5}>
          <Avatar
            src="/images/tukang.jpg"
            size="m"
            style={{ height: "35px", width: "35px" }}
          />
          <Icon iconName={iconName} color="white" onClick={handleClick} />
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
