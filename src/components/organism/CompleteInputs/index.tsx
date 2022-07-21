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
  toDate?: boolean;
  toDateTitle?: string;
  fromDateTitle?: string;
  statusTitle?: string;
  placeholder?: string;
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
  toDate,
  toDateTitle = "To",
  fromDateTitle = "From",
  statusTitle = "Status",
  placeholder = "Select Status",
}: IProps) {
  return (
    <Grid container gap={15} style={{ marginTop: "40px", maxHeight: "60px" }}>
      <DateContainer style={{ flex: 1, height: "60px" }}>
        <LabeledInput
          name="fromDate"
          title={fromDateTitle}
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
      {toDate && (
        <DateContainer style={{ flex: 1, height: "60px" }}>
          <LabeledInput
            name="toDate"
            title={toDateTitle}
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
      )}
      <StatusContainer style={{ flex: 1, height: "60px", minWidth: 150 }}>
        <label>{statusTitle}</label>
        <Select placeholder={placeholder} items={inputDropDownOperation} />
      </StatusContainer>
      <Grid container style={{ flex: 1, height: "60px" }}>
        <StyledButton
          style={{
            fontSize: "25px",
            padding: "0",
            fontWeight: fontWeights.bold,
            backgroundColor: colors.orange,
            minWidth: 150,
          }}
        >
          SHOW
        </StyledButton>
      </Grid>
    </Grid>
  );
}
