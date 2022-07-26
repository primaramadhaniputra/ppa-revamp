import { Select } from "@hudoro/neron";
import React from "react";
import { inputDropDownOperation } from "utils/dummy";
import { ArrowDown, StatusContainer } from "./styles";

interface IProps {
  title: string;
}

export default function StyledSelect({ title }: IProps) {
  return (
    <StatusContainer style={{ flex: 1, minWidth: "150px" }}>
      <label>{title}</label>
      <Select placeholder="banana" items={inputDropDownOperation} />
      <ArrowDown />
    </StatusContainer>
  );
}
