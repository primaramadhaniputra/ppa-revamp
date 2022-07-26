import { IcCalendar } from "atoms/Icon";
import LabeledInput from "atoms/LabeledInput";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { convert } from "utils/functions";
import { Container, DateContainer, DateIconContainer } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps {
  title: string;
  dateState: Date;
  setDateState: (e: Date) => void;
}

export default function DateCalendar({
  title,
  dateState,
  setDateState,
}: IProps) {
  const [isDate, setDate] = useState(false);

  const handleDateInput = () => {
    setDate(!isDate);
  };

  const handleSelectDate = (e: Date) => {
    setDateState(e);
  };

  return (
    <DateContainer style={{ flex: 1, height: "60px" }}>
      <LabeledInput
        name="date"
        title={title}
        style={{ backgroundColor: "transparent", border: "none" }}
        value={convert(dateState)}
        onClick={handleDateInput}
      />
      <DateIconContainer>
        <IcCalendar width={20} />
      </DateIconContainer>
      {isDate && (
        <Container>
          <Calendar date={dateState} onChange={handleSelectDate} />
        </Container>
      )}
    </DateContainer>
  );
}
