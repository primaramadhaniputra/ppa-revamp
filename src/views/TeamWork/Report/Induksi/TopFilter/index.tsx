import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import RevisiDate from 'molecules/RevisiDate'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'

export default function TopFilter() {
   const [toDateState, setToDateState] = useState<Date>()
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   return (
      <Grid container alignItems='center' style={{ gap: 20 }}>
         <RevisiDate placeholder='Date' dateState={toDateState as Date} setDateState={handleToDateState} />
         <Grid container style={{ flex: 1, maxWidth: '200px', minWidth: '200px' }}>
            <StyledButton
               style={{
                  fontSize: "20px",
                  padding: "0",
                  fontWeight: fontWeights.bold,
                  backgroundColor: colors.orange,
                  borderRadius: '3px'
               }}
            >
               APPLY
            </StyledButton>
         </Grid>
      </Grid>
   )
}
