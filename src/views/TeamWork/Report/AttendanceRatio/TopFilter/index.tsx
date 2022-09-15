import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

interface IProps {
  noDept?: boolean;
  noDate?: boolean;
  doubleSelect?: boolean;
  withYear?: boolean;
  styles?: React.CSSProperties;
}

export default function TopFilter({
  noDept,
  noDate,
  doubleSelect,
  styles,
}: IProps) {
  const [toDateState, setToDateState] = useState(new Date());
  const [fromDateState, setFromDateState] = useState(new Date());
  const handleToDateState = (e: Date) => {
    setToDateState(e);
  };
  const handleFromDateState = (e: Date) => {
    setFromDateState(e);
  };
  return (
    <Wrapper style={{ ...styles }}>
      {!noDate && (
        <RevisiDate
          placeholder="To"
          dateState={toDateState}
          setDateState={handleToDateState}
        />
      )}
      {!noDate && (
        <RevisiDate
          placeholder="From"
          dateState={fromDateState}
          setDateState={handleFromDateState}
        />
      )}
      {!noDept && (
        <Grid>
          <RevisiDropdown />
        </Grid>
      )}
      <Grid>
        <RevisiDropdown />
      </Grid>
      {doubleSelect && (
        <Grid>
          <Grid>
            <RevisiDropdown />
          </Grid>
        </Grid>
      )}
      <ButtonWrapper>
        <StyledButton
          style={{
            fontSize: "18px",
            padding: "0",
            fontWeight: fontWeights.bold,
            backgroundColor: colors.orange,
            borderRadius: "3px",
            minWidth: "150px",
          }}
        >
          SHOW
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
