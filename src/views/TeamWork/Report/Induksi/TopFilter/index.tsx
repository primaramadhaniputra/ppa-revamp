import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'

export default function TopFilter() {
   const [toDateState, setToDateState] = useState(new Date())
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   return (
      <Grid container style={{ marginTop: '10px', gap: 5 }}>
         <DateCalendar title="Date" dateState={toDateState} setDateState={handleToDateState} />
         <Grid container style={{ flex: 1, minWidth: '150px' }}>
            <StyledButton
               style={{
                  fontSize: "25px",
                  padding: "0",
                  fontWeight: fontWeights.bold,
                  backgroundColor: colors.orange,
               }}
            >
               SHOW
            </StyledButton>
         </Grid>
      </Grid>
   )
}
