import { Grid, Text } from '@hudoro/neron'
import { IcCalendar } from 'atoms/Icon'
import LabeledInput from 'atoms/LabeledInput'
import React, { useState } from 'react'
import { colors, fontSizing, fontWeights } from 'utils/styles'
import { ArrowContainer, ArrowDown, ArrowUP, CalendarContainer, FormCard, FormContainer, IconContainer, TextHeaderContainer, Wrapper } from './styles'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { convert } from 'utils/functions'
import StyledButton from 'atoms/StyledButton'

export default function SetRoster() {
   const [fromCalendar, setFromCalendar] = useState(new Date())
   const [toCalendar, setToCalendar] = useState(new Date())
   const [isFromCalendar, setIsFromCalendar] = useState(false)
   const [isToCalendar, setIsToCalendar] = useState(false)

   const handleFromCalendar = (e: Date) => {
      setFromCalendar(e)
   }
   const handleToCalendar = (e: Date) => {
      setToCalendar(e)
   }

   const displayFromCalendar = () => {
      setIsFromCalendar(!isFromCalendar)
   }
   const displayToCalendar = () => {
      setIsToCalendar(!isToCalendar)
   }

   return (
      <Wrapper>
         <TextHeaderContainer style={{ marginTop: '30px' }}>
            <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form / Set Roster</Text>
         </TextHeaderContainer>
         <FormContainer>
            <Text variant="h4" style={{ fontWeight: fontWeights.bold }} >Form  Roster</Text>
            <FormCard >
               <Grid container gap={30} style={{ textAlign: 'start', marginBottom: '20px' }}>
                  <Grid >
                     <LabeledInput name='nrp' title='NRP' styleLabel={{ fontWeight: fontWeights.bold }} />
                  </Grid>
                  <Grid style={{ position: 'relative' }} >
                     <LabeledInput name='roster' title='Roster' styleLabel={{ fontWeight: fontWeights.bold }} />
                     <ArrowContainer>
                        <ArrowUP />
                        <ArrowDown />
                     </ArrowContainer>
                  </Grid>
               </Grid>
               <Grid container gap={30} style={{ textAlign: 'start' }}>
                  <Grid style={{ position: 'relative' }} >
                     <LabeledInput name='from' title='From' styleLabel={{ fontWeight: fontWeights.bold }} value={convert(fromCalendar)} onClick={displayFromCalendar} />
                     <IconContainer>
                        <IcCalendar width={20} />
                     </IconContainer>
                     {isFromCalendar && <CalendarContainer>
                        <Calendar date={fromCalendar} onChange={handleFromCalendar} />
                     </CalendarContainer>}

                  </Grid>
                  <Grid style={{ position: 'relative' }}>
                     <LabeledInput name='to' title='To' styleLabel={{ fontWeight: fontWeights.bold }} value={convert(toCalendar)} onClick={displayToCalendar} />
                     <IconContainer>
                        <IcCalendar width={20} />
                     </IconContainer>
                     {isToCalendar && <CalendarContainer>
                        <Calendar date={toCalendar} onChange={handleToCalendar} />
                     </CalendarContainer>}
                  </Grid>
               </Grid>
            </FormCard>
            <Grid container justifyContent='flex-end' style={{ marginTop: '10px' }} >
               <Grid style={{ maxWidth: '200px' }}>
                  <StyledButton style={{ color: colors.orange, backgroundColor: 'transparent', borderRadius: '50px', fontSize: fontSizing.xl.fontSize, fontWeight: fontWeights.semi }}>Back</StyledButton>
               </Grid>
               <Grid style={{ maxWidth: '200px' }}>
                  <StyledButton style={{ color: colors.white, backgroundColor: colors.orange, borderRadius: '50px', fontSize: fontSizing.xl.fontSize, fontWeight: fontWeights.semi }}>Submit</StyledButton>
               </Grid>

            </Grid>
         </FormContainer>
      </Wrapper >
   )
}
