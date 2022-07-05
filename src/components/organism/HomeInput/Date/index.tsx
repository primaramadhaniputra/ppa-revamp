import React from "react";
import { DateRange } from "react-date-range";
import { colors } from "utils/styles";
import { DateWrapper } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
// theme css file
interface IProps {
  setState: React.Dispatch<
    React.SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
  state: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
}

export default function DateCalendar({ setState, state }: IProps) {
  return (
    <DateWrapper style={{ zIndex: "9999" }}>
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
