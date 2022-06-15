import { Avatar, Grid, Icon, Text } from "@hudoro/neron";
import React, { useState } from "react";
import { colors } from "utils/styles";
import {
  StyledCardDropdown,
  StyledText,
  Wrapper,
  WrapperDropdown,
} from "./styles";

interface IProps {
  children: React.ReactNode;
  user: boolean;
  dropDownData?: string[];
  activeDropdown?: number;
  setactiveDropdown?: React.Dispatch<React.SetStateAction<number>>;
  index?: number;
}

export default function TextDropdown({
  children,
  user,
  dropDownData,
  activeDropdown,
  setactiveDropdown,
  index: id,
}: IProps) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleDropdown = () => {
    if (activeDropdown === id) {
      return setIsShowDropdown(!isShowDropdown);
    }
    if (setactiveDropdown) {
      return setactiveDropdown(id as number);
    }
    return setIsShowDropdown;
  };

  return (
    <Wrapper container>
      <Grid container alignItems="center" gap={8}>
        {user ? <Avatar /> : <StyledText variant="h4">{children}</StyledText>}
        <Icon
          iconName="IcArrowDown"
          color={colors.white}
          onClick={handleDropdown}
        />
      </Grid>
      {!user && activeDropdown === id && isShowDropdown && (
        <WrapperDropdown container>
          <StyledCardDropdown>
            {dropDownData &&
              dropDownData.map((item, index) => {
                return (
                  <Text variant="h4" key={index}>
                    {item}
                  </Text>
                );
              })}
          </StyledCardDropdown>
        </WrapperDropdown>
      )}
    </Wrapper>
  );
}
