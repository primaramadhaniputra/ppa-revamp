import React from 'react'
import { StyledText, Wrapper } from './styles'

const text = ['Individual', 'Department', 'Manpower', 'YTD']

interface IProps {
   activeTabs: number
   setActiveTabs: React.Dispatch<React.SetStateAction<number>>

}

export default function TabsText({ activeTabs, setActiveTabs }: IProps) {
   return (
      <Wrapper>
         {text.map((item, index) => <StyledText className={activeTabs === index ? 'active' : ''} key={index} onClick={() => setActiveTabs(index)}>{item}</StyledText>)}
      </Wrapper>
   )
}
