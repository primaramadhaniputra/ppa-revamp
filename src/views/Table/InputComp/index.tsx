import { Grid, Select, Text } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import React from 'react'
import { colors } from 'utils/styles'
import { ButtonWrapper, Wrapper } from './styles'

export default function InputComp() {
   return (
      <Wrapper container >
         <Grid container flexDirection='column' gap={5}>
            <Text variant='p' >Show</Text>
            <Select items={[{ id: 1, values: 'asdf', label: '10' }]} />
         </Grid>
         <Grid container gap={20} >
            <ButtonWrapper style={{ minWidth: '142px' }}>
               <StyledButton style={{ backgroundColor: colors.blueSky, color: '#25282B' }}>Export</StyledButton>
            </ButtonWrapper>
            <ButtonWrapper style={{ minWidth: '142px' }}>
               <StyledButton>Add employee</StyledButton>
            </ButtonWrapper>
         </Grid>
      </Wrapper>
   )
}
