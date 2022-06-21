import React from "react";
import { DateRange } from "react-date-range";
import { colors } from "utils/styles";
import { DateWrapper } from "./styles";

interface IProps {
  setState: React.Dispatch<
    React.SetStateAction<
      {
        startDate: any;
        endDate: any;
        key: string;
      }[]
    >
  >;
  state: {
    startDate: any;
    endDate: any;
    key: string;
  }[];
}

export default function DateCalendar({ setState, state }: IProps) {
  return (
    <DateWrapper>
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={[colors.primary]}
      />
    </DateWrapper>
  );
}
