import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'
import { Wrapper } from './styles'

export default function TopFilter() {
   const [toDateState, setToDateState] = useState(new Date())
   const [fromDateState, setFromDateState] = useState(new Date())
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   const handleFromDateState = (e: Date) => {
      setFromDateState(e)
   }
   return (
      <Wrapper>
         <DateCalendar title="To" dateState={toDateState} setDateState={handleToDateState} />
         <DateCalendar title="From" dateState={fromDateState} setDateState={handleFromDateState} />
         <Grid container style={{ flex: 1, minWidth: '100px' }}>
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
      </Wrapper>
   )
}
