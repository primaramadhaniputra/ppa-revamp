import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import StyledSelect from 'molecules/StyledSelect'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'

interface IProps {
   noDept?: boolean
}

export default function TopFilter({ noDept }: IProps) {
   const [toDateState, setToDateState] = useState(new Date())
   const [fromDateState, setFromDateState] = useState(new Date())
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   const handleFromDateState = (e: Date) => {
      setFromDateState(e)
   }
   return (
      <Grid container style={{ marginTop: '10px', gap: 5 }}>
         <DateCalendar title="To" dateState={toDateState} setDateState={handleToDateState} />
         <DateCalendar title="From" dateState={fromDateState} setDateState={handleFromDateState} />
         {!noDept && <StyledSelect title='Dept' />}
         <StyledSelect title='Comp' />
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
