import { Grid } from '@hudoro/neron'
import Image from 'next/image'
import React from 'react'
import { HeaderContainer, ProductText, ProductTextContainer, SingleProduct, Wrapper } from './styles'

export default function Product() {
   return (
      <Wrapper>
         <SingleProduct>
            <HeaderContainer>
               <ProductText>
                  OB kbcm <span style={{ color: '#47BF34' }}>(105%)</span>
               </ProductText>
               <Image src='/images/logo.png' height={37} width={37} alt='product logo' quality={100} />
               <ProductText>
                  Coal kton <span style={{ color: '#EB3B3B' }}>(105%)</span>
               </ProductText>
            </HeaderContainer>
            <ProductTextContainer>
               <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <ProductText>A</ProductText>
                     <ProductText>123</ProductText>
                  </Grid>
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <ProductText>A</ProductText>
                     <ProductText>123</ProductText>
                  </Grid>
               </Grid>
               <Grid container style={{ flex: 1 }} justifyContent='center' alignItems='center'>
                  <ProductText>All Site</ProductText>
               </Grid>
               <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <ProductText>A</ProductText>
                     <ProductText>123</ProductText>
                  </Grid>
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <ProductText>A</ProductText>
                     <ProductText>123</ProductText>
                  </Grid>
               </Grid>
            </ProductTextContainer>
         </SingleProduct>
      </Wrapper>
   )
}
