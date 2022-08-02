import { Grid } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import DateCalendar from 'molecules/Date'
import StyledDropdownMenu from 'molecules/StyledDropdownMenu'
import React, { useState } from 'react'
import { getDayliMoco } from 'services/moco'
import { convert, notify } from 'utils/functions'
import { colors, fontWeights } from 'utils/styles'

interface IProps {
   setDataTable: any
}

export default function TopFilter({ setDataTable }: IProps) {
   const [toDateState, setToDateState] = useState(new Date())
   const [fromDateState, setFromDateState] = useState(new Date())
   const [activeShiftDropdown, setActiveShiftDropdown] = useState([]);
   const [activePitDropdown, setActivePitDropdown] = useState([]);
   const handleToDateState = (e: Date) => {
      setToDateState(e)
   }
   const handleFromDateState = (e: Date) => {
      setFromDateState(e)
   }
   const getData = async () => {
      try {
         const startDate = convert(fromDateState)
         const fromDate = convert(toDateState)
         console.log(startDate)
         console.log(fromDate)
         const data = await getDayliMoco({
            params: {
               start: startDate,
               end: fromDate
            }
         })
         setDataTable(data.data.data.rows)
         return notify("Berhasil mendapatkan data", 'success')
      } catch (error: any) {
         return notify(error.message, 'error')
      }
   }

   const showData = () => {
      getData()
   }

   return (
      <Grid container style={{ marginTop: '10px', gap: 5 }}>
         <DateCalendar title="From" dateState={fromDateState} setDateState={handleFromDateState} />
         <DateCalendar title="To" dateState={toDateState} setDateState={handleToDateState} />
         <Grid>
            <StyledDropdownMenu title='Shift' data={[1, 2]} activeDropdown={activeShiftDropdown} setActiveDropdown={setActiveShiftDropdown} />
         </Grid>
         <Grid>
            <StyledDropdownMenu title='Pit' data={['BLP', 'SENTUK 40', '60', 'SENTUK J', '0', 'SENTUK J SOUTH', 'SENTUK 10.0', 'SENTUK -10.0', 'SENTUK -15.0', 'SETNUK -30.0', 'SENTUK -3.0', 'SENTUK 0.0', 'DSP JLN HAULING', '#N']} activeDropdown={activePitDropdown} setActiveDropdown={setActivePitDropdown} />
         </Grid>
         <Grid container style={{ flex: 1, minWidth: '150px' }}>
            <StyledButton
               style={{
                  fontSize: "25px",
                  padding: "0",
                  fontWeight: fontWeights.bold,
                  backgroundColor: colors.orange,
               }}
               onClick={showData}
            >
               SHOW
            </StyledButton>
         </Grid>
      </Grid>
   )
}
