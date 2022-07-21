import { Grid, Select } from "@hudoro/neron";
import { IcCalendar } from "atoms/Icon";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { convert } from "utils/functions";
import { colors, fontWeights } from "utils/styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { inputDropDownOperation } from "utils/dummy";
import {
  Container,
  DateContainer,
  DateIconContainer,
  StatusContainer,
} from "./styles";

interface IProps {
  fromDateState: Date;
  handleFromDateInput?: () => void;
  isFromDate: boolean;
  handleSelectFromDate?: (date: Date) => void;
  toDateState: Date;
  handleToDateInput?: () => void;
  isToDate: boolean;
  handleSelectToDate?: (date: Date) => void;
}

export default function CompleteInputs({
  fromDateState,
  handleFromDateInput,
  isFromDate,
  handleSelectFromDate,
  toDateState,
  handleToDateInput,
  isToDate,
  handleSelectToDate,
}: IProps) {
  return (
    <Grid container gap={15} style={{ marginTop: "40px" }}>
      <DateContainer style={{ flex: 1 }}>
        <LabeledInput
          name="fromDate"
          title="From"
          style={{ backgroundColor: "transparent", border: "none" }}
          value={convert(fromDateState)}
          onClick={handleFromDateInput}
        />
        <DateIconContainer>
          <IcCalendar width={20} />
        </DateIconContainer>
        {isFromDate && (
          <Container>
            <Calendar date={fromDateState} onChange={handleSelectFromDate} />
          </Container>
        )}
      </DateContainer>
      <DateContainer style={{ flex: 1 }}>
        <LabeledInput
          name="toDate"
          title="To"
          style={{ backgroundColor: "transparent", border: "none" }}
          value={convert(toDateState)}
          onClick={handleToDateInput}
        />
        <DateIconContainer>
          <IcCalendar width={20} />
        </DateIconContainer>
        {isToDate && (
          <Container>
            <Calendar date={toDateState} onChange={handleSelectToDate} />
          </Container>
        )}
      </DateContainer>
      <StatusContainer style={{ flex: 1 }}>
        <label>Status</label>
        <Select placeholder="Select status" items={inputDropDownOperation} />
      </StatusContainer>
      <Grid container style={{ flex: 1 }}>
        <StyledButton
          style={{
            fontSize: "30px",
            padding: "0",
            fontWeight: fontWeights.bold,
            backgroundColor: colors.orange,
          }}
        >
          Show
        </StyledButton>
      </Grid>
    </Grid>
  );
}
