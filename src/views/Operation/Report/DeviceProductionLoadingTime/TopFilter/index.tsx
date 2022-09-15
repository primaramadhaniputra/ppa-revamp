import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import DateCalendar from "molecules/Date";
import React from "react";
import { colors, fontWeights } from "utils/styles";
import { Wrapper } from "./styles";

interface IProps {
  toDate: Date;
  fromDate: Date;
  handleFromDate: (e: Date) => void;
  handleToDate: (e: Date) => void;
  getData: () => void;
}

export default function TopFilter({
  fromDate,
  toDate,
  handleFromDate,
  handleToDate,
  getData,
}: IProps) {
  return (
    <Wrapper>
      <DateCalendar
        title="From"
        dateState={fromDate}
        setDateState={handleFromDate}
      />
      <DateCalendar title="To" dateState={toDate} setDateState={handleToDate} />
      <Grid container style={{ flex: 1, minWidth: "150px" }}>
        <StyledButton
          style={{
            fontSize: "25px",
            padding: "0",
            fontWeight: fontWeights.bold,
            backgroundColor: colors.orange,
          }}
          onClick={getData}
        >
          SHOW
        </StyledButton>
      </Grid>
    </Wrapper>
  );
}
