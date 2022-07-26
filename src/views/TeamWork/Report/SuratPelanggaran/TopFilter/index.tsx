import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import StyledSelect from 'molecules/StyledSelect'
import React from 'react'
import { colors, fontWeights } from 'utils/styles'

export default function TopFilter() {
   return (
      <Grid container style={{ marginTop: '10px', gap: 5 }}>
         <StyledSelect title='Status' />
         <StyledSelect title='Dept' />
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
