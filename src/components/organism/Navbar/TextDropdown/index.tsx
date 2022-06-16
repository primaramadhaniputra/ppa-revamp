import { Avatar, Grid, Icon } from "@hudoro/neron";
import React, { useState } from "react";
import { colors } from "utils/styles";
import DropDownMenu from "../DropdownMenu";
import UserDropDownMenu from "../UserDropdownMenu";
import { StyledText, Wrapper } from "./styles";

interface IProps {
  user: boolean;
  dropDownData?: string[];
  activeDropdown?: number;
  setactiveDropdown?: React.Dispatch<React.SetStateAction<number>>;
  index?: number;
  title?: string;
  handleDropdown?: () => void;
}

export default function TextDropdown({
  user,
  dropDownData,
  activeDropdown,
  setactiveDropdown,
  index: id,
  title,
}: IProps) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const handleDropdown = () => {
    if (activeDropdown === id) {
      return setIsShowDropdown(!isShowDropdown);
    }
    if (setactiveDropdown) {
      setactiveDropdown(id as number);
      return setIsShowDropdown(true);
    }
    return setIsShowDropdown;
  };

  const renderDropdown = () => {
    if (activeDropdown === id && isShowDropdown) {
      if (!user) {
        return <DropDownMenu dropDownData={dropDownData} />;
      }
      return <UserDropDownMenu />;
    }
    return <></>;
  };

  return (
    <Wrapper container>
      <Grid container alignItems="center" gap={8}>
        {user ? (
          <Avatar src="/images/tukang.jpg" />
        ) : (
          <StyledText variant="h4">{title}</StyledText>
        )}
        <Icon
          iconName="IcArrowDown"
          color={colors.white}
          onClick={handleDropdown}
        />
      </Grid>
      {renderDropdown()}
    </Wrapper>
  );
}
