import { Grid } from '@hudoro/neron'
import React from 'react'
import { FooterText, Wrapper } from './styles'

const footer = [
   {
      title: 'devotion',
      color: '#008000'
   },
   {
      title: 'integrity',
      color: '#0000FF'
   },
   {
      title: 'teamwork',
      color: '#37382F'
   },
   {
      title: 'creativity',
      color: '#F4762C'
   },
   {
      title: 'winner',
      color: '#FF0000'
   },
   {
      title: 'perfection',
      color: '#9F3F9F'
   },
]

export default function Footer() {
   return (
      <Wrapper>
         <Grid container justifyContent='center' gap={15} style={{ padding: '0 10px' }}>
            {
               footer.map((item, index) => (
                  <FooterText key={index} variant='p' style={{ color: item.color }} >{item.title}</FooterText>
               ))
            }
         </Grid>
      </Wrapper>
   )
}
