import { Grid, Select } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
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
      <Grid>
        <InputLabel variant="p">{title}</InputLabel>
        <WrapperInput>
          <Select items={items} placeholder={placeholder} />
        </WrapperInput>
      </Grid>
      <WrapperInput>
        <LabeldInput label={true} title="Start Date" placeholder="start date" />
      </WrapperInput>
      <WrapperInput>
        <LabeldInput label={true} title="End Date" placeholder="end date" />
      </WrapperInput>
    </Wrapper>
  );
}
