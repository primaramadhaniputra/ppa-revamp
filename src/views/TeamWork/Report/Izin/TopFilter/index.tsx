import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import RevisiDate from 'molecules/RevisiDate'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'
import { ButtonWrapper } from './styles'

export default function TopFilter() {
   const [toDateState, setToDateState] = useState<Date>()
   const [fromDateState, setFromDateState] = useState<Date>()
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   const handleFromDateState = (e: Date) => {
      setFromDateState(e)
   }
   return (
      <Grid container alignItems='center' style={{ margin: '10px 0 30px', columnGap: 50, rowGap: 10 }}>
         <RevisiDate placeholder="From" dateState={fromDateState as Date} setDateState={handleFromDateState} />
         <RevisiDate placeholder="To" dateState={toDateState as Date} setDateState={handleToDateState} />
         <ButtonWrapper >
            <StyledButton
               style={{
                  fontSize: "20px",
                  padding: "0",
                  fontWeight: fontWeights.bold,
                  backgroundColor: colors.orange,

               }}
            >
               SHOW
            </StyledButton>
         </ButtonWrapper>
      </Grid>
   )
}
