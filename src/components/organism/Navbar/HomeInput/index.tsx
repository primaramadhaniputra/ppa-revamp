import { Select } from "@hudoro/neron";
import React from "react";
import { InputLabel, Wrapper, WrapperInput } from "./styles";

interface IProps {
  items: {
    id: number;
    value: string;
    label: string;
  }[];
  title: string;
  placeholder: string;
}

export default function HomeInput({ items, title, placeholder }: IProps) {
  return (
    <Wrapper>
      <InputLabel variant="p">{title}</InputLabel>
      <WrapperInput>
        <Select items={items} placeholder={placeholder} />
      </WrapperInput>
    </Wrapper>
  );
}
