import { Avatar, Icon, IIconProps, Text } from "@hudoro/neron";
import React from "react";

interface IProps {
  title?: string;
  handleClick?: () => void;
  user: boolean;
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
      {user ? (
        <Avatar src="/images/tukang.jpg" size="l" />
      ) : (
        <Text variant="h4" style={styles}>
          {title}
        </Text>
      )}
      <Icon iconName={iconName} color="white" onClick={handleClick} />
    </>
  );
}
