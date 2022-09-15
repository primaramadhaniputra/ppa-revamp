import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";

export default function TopFilter() {
  const [toDateState, setToDateState] = useState<Date>();
  const handleToDateState = (e: Date) => {
    setToDateState(e);
  };
  return (
    <Grid container style={{ columnGap: 20, rowGap: 10 }}>
      <RevisiDate
        placeholder="Date"
        dateState={toDateState as Date}
        setDateState={handleToDateState}
      />
      <Grid container style={{ flex: 1, minWidth: "100px" }}>
        <StyledButton
          style={{
            fontSize: "18px",
            padding: "0",
            fontWeight: fontWeights.bold,
            backgroundColor: colors.orange,
            borderRadius: 2,
          }}
        >
          SHOW
        </StyledButton>
      </Grid>
    </Grid>
  );
}
