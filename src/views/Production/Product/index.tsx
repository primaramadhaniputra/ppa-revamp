import { Grid } from '@hudoro/neron'
import Image from 'next/image'
import React from 'react'
import { HeaderContainer, ProductText, ProductTextContainer, SingleProduct, Wrapper } from './styles'

const data = [
   {
      title: 'All Site',
      logo: '/images/production1.png'
   },
   {
      title: 'BIB',
      logo: '/images/production3.png'
   },
   {
      title: 'MHU',
      logo: '/images/production4.png'
   },
   {
      title: 'ABP',
      logo: '/images/production5.png'
   },
   {
      title: 'KJB',
      logo: '/images/production12.png'
   },
   {
      title: 'SKS',
      logo: '/images/production6.png'
   },
   {
      title: 'BA',
      logo: '/images/production9.png'
   },
   {
      title: 'ADW',
      logo: '/images/production7.png'
   },
   {
      title: 'MIP',
      logo: '/images/production7.png'
   },
   {
      title: 'MLP',
      logo: '/images/production10.png'
   },
   {
      title: 'HSM',
      logo: '/images/production11.png'
   },
]

export default function Product() {
   return (
      <Wrapper>
         {
            data.map((item, index) =>
               <SingleProduct key={index}>
                  <HeaderContainer>
                     <ProductText>
                        OB kbcm <span style={{ color: '#47BF34' }}>(105%)</span>
                     </ProductText>
                     <Image src={item.logo} height={37} width={37} alt='product logo' quality={100} />
                     <ProductText>
                        Coal kton <span style={{ color: '#EB3B3B' }}>(105%)</span>
                     </ProductText>
                  </HeaderContainer>
                  <ProductTextContainer>
                     <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                        <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                           <ProductText>P</ProductText>
                           <ProductText>908</ProductText>
                        </Grid>
                        <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                           <ProductText>A</ProductText>
                           <ProductText>908</ProductText>
                        </Grid>
                     </Grid>
                     <Grid container style={{ flex: 1 }} justifyContent='center' alignItems='center'>
                        <ProductText>{item.title}</ProductText>
                     </Grid>
                     <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                        <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                           <ProductText>P</ProductText>
                           <ProductText>408</ProductText>
                        </Grid>
                        <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                           <ProductText>A</ProductText>
                           <ProductText>400</ProductText>
                        </Grid>
                     </Grid>
                  </ProductTextContainer>
               </SingleProduct>)
         }
      </Wrapper>
   )
}
