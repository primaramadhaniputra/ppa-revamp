import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import StyledDropdownMenu from 'molecules/StyledDropdownMenu'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'

export default function TopFilter() {
   const [fromDateState, setFromDateState] = useState(new Date())
   const handleFromDateState = (e: Date) => {
      setFromDateState(e)
   }
   return (
      <Grid container style={{ marginTop: '30px', gap: 5 }}>
         <DateCalendar title="From" dateState={fromDateState} setDateState={handleFromDateState} />
         <Grid>
            <StyledDropdownMenu title='Status' />
         </Grid>
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
