import { Grid, Select } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import React, { useState } from "react";
import { convert } from "utils/functions";
import DateCalendar from "./Date";
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
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isShowDate, setIsShowDate] = useState(false);

  const handleDate = () => {
    return setIsShowDate(!isShowDate);
  };

  return (
    <Wrapper>
      <Grid>
        <InputLabel variant="p">{title}</InputLabel>
        <WrapperInput>
          <Select items={items} placeholder={placeholder} />
        </WrapperInput>
      </Grid>
      <WrapperInput>
        <LabeledInput
          name="end"
          label={true}
          title="Date"
          onClick={handleDate}
          value={`${convert(state[0].startDate)} ~ ${convert(
            state[0].endDate
          )}`}
        />
        {isShowDate && <DateCalendar setState={setState} state={state} />}
      </WrapperInput>
    </Wrapper>
  );
}
