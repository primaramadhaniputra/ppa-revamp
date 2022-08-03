import { Grid } from '@hudoro/neron'
import RevisiDropdown from 'atoms/RevisiDropdown'
import StyledButton from 'atoms/StyledButton'
import RevisiDate from 'molecules/RevisiDate'
import StyledDropdownMenu from 'molecules/StyledDropdownMenu'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'
import { ButtonWrapper, TextYear, Wrapper } from './styles'

interface IProps {
   noDept?: boolean
   noDate?: boolean
   doubleSelect?: boolean
   withYear?: boolean
}

export default function TopFilter({ noDept, noDate, doubleSelect, withYear }: IProps) {
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
         {!noDate && <RevisiDate placeholder="To" dateState={toDateState} setDateState={handleToDateState} />}
         {!noDate && <RevisiDate placeholder="From" dateState={fromDateState} setDateState={handleFromDateState} />}
         {!noDept && <Grid >
            <RevisiDropdown />
         </Grid>}
         <Grid >
            <RevisiDropdown />
         </Grid>
         {doubleSelect && <Grid>
            <StyledDropdownMenu title='Tahun' activeDropdown={[]} setActiveDropdown={() => { }} />
         </Grid>}
         <ButtonWrapper >
            <StyledButton
               style={{
                  fontSize: "18px",
                  padding: "0",
                  fontWeight: fontWeights.bold,
                  backgroundColor: colors.orange,
                  borderRadius: '3px',
                  minWidth: '150px'
               }}
            >
               SHOW
            </StyledButton>
         </ButtonWrapper>
         {withYear &&
            <Grid container justifyContent='flex-end' alignItems='flex-end' style={{ flex: 1, minWidth: 'max-content' }}>
               <TextYear>Current Year <span>2021</span></TextYear>
            </Grid>}
      </Wrapper>
   )
}
