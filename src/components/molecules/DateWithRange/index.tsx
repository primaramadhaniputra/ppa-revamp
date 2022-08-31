import LabeledInput from "atoms/LabeledInput";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { convert } from "utils/functions";
import { Container, DateContainer } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps {
  title: string;
  dateState: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
  setDateState: React.Dispatch<
    React.SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
  styles?: React.CSSProperties;
}

export default function DateWithRange({
  title,
  dateState,
  setDateState,
  styles,
}: IProps) {
  const [isDate, setDate] = useState(false);

  const handleDateInput = () => {
    setDate(!isDate);
  };

  const handleSelectDate = (e: any) => {
    setDateState([e.selection]);
  };
  return (
    <DateContainer style={{ flex: 1, ...styles }}>
      <LabeledInput
        name="date"
        title={title}
        style={{
          backgroundColor: " #E8F0FE",
          border: "2px solid #E8F0FE",
          padding: "10px 10px",
        }}
        value={`${convert(dateState[0].startDate)} ~ ${convert(
          dateState[0].endDate
        )}`}
        onClick={handleDateInput}
      />
      {isDate && (
        <Container>
          <DateRange
            editableDateInputs={true}
            onChange={handleSelectDate}
            moveRangeOnFirstSelection={false}
            ranges={dateState}
          />
        </Container>
      )}
    </DateContainer>
  );
}
