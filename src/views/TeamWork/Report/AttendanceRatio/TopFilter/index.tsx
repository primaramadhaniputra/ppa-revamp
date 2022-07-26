import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import StyledSelect from 'molecules/StyledSelect'
import React, { useState } from 'react'
import { colors, fontWeights } from 'utils/styles'
import { TextYear } from './styles'

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
      <Grid container style={{ marginTop: '10px', gap: 5 }}>
         {!noDate && <DateCalendar title="To" dateState={toDateState} setDateState={handleToDateState} />}
         {!noDate && <DateCalendar title="From" dateState={fromDateState} setDateState={handleFromDateState} />}
         {!noDept && <StyledSelect title='Dept' />}
         <StyledSelect title='Nama' />
         {doubleSelect && <StyledSelect title='Tahun' />}
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
         {withYear &&
            <Grid container justifyContent='flex-end' alignItems='flex-end' style={{ flex: 1, minWidth: 'max-content' }}>
               <TextYear>Current Year <span>2021</span></TextYear>
            </Grid>}
      </Grid>
   )
}
