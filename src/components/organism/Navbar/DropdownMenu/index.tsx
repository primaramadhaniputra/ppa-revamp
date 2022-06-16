import React from "react";
import { StyledCardDropdown, WrapperDropdown } from "../TextDropdown/styles";
import { StyledTextDropdown } from "./styles";

interface IProps {
  dropDownData?: string[];
}

export default function DropDownMenu({ dropDownData }: IProps) {
  return (
    <WrapperDropdown container>
      <StyledCardDropdown>
        {dropDownData &&
          dropDownData.map((item, index) => {
            return <StyledTextDropdown key={index}>{item}</StyledTextDropdown>;
          })}
      </StyledCardDropdown>
    </WrapperDropdown>
  );
}
