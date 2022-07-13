import { Grid, ISelectItem, Select, Text } from '@hudoro/neron'
import StyledButton from 'atoms/StyledButton'
import React from 'react'
import { dummyValueTable } from 'utils/dummy'
import { colors } from 'utils/styles'
import { ButtonWrapper, Wrapper } from './styles'

interface IInputComp {
   value: ISelectItem[] | ISelectItem
   handleChange: (e: any) => void
}

export default function InputComp({ value, handleChange }: IInputComp) {
   return (
      <Wrapper container >
         <Grid container flexDirection='column' gap={5}>
            <Text variant='p' >Show</Text>
            <Select defaultValue={value} items={dummyValueTable} onChange={handleChange} />
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
