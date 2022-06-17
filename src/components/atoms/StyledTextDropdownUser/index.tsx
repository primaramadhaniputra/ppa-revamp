import { Avatar, Icon, IIconProps, Text } from "@hudoro/neron";
import React from "react";
import { colors } from "utils/styles";

interface IProps {
  title?: string;
  handleClick?: () => void;
  user: boolean;
  iconName?: IIconProps["iconName"];
}

export default function StyledTextDropdownUser({
  title,
  handleClick,
  user,
  iconName = "IcArrowDown",
}: IProps) {
  return (
    <>
      {user ? (
        <Avatar src="/images/tukang.jpg" size="l" />
      ) : (
        <Text variant="h4" style={{ color: colors.white }}>
          {title}
        </Text>
      )}
      <Icon iconName={iconName} color="white" onClick={handleClick} />
    </>
  );
}
