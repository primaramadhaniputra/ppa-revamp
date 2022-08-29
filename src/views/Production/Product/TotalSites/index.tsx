import { Grid } from '@hudoro/neron'
import Image from 'next/image'
import React from 'react'
import { ProductText, ProductTitle } from '../styles'
import { Lozenge, SingleProduct, Title, Wrapper, WrapperProduct } from './styles'

export default function TotalSites() {
   return (
      <Wrapper>
         <Grid style={{ marginBottom: '31px' }} container alignItems='center' gap={15}>
            <ProductTitle style={{ marginTop: '0' }}>Total All Sites</ProductTitle>
            <Image src='/images/production1.png' width={37} height={37} alt='ppa logo' />
         </Grid>
         <WrapperProduct gap={26}>
            <SingleProduct>
               <Grid container alignItems='center' gap={10}>
                  <Image src='/icons/CheckCircle.png' width={28} height={28} alt='circle logo' />
                  <Title >OB Kbcm</Title>
               </Grid>
               <Lozenge>105%</Lozenge>
               <Grid container justifyContent='space-between' style={{ marginBottom: '20px' }} >
                  <Grid container gap={5}>
                     <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                     <ProductText>P</ProductText>
                  </Grid>
                  <ProductText>908</ProductText>
               </Grid>
               <Grid container justifyContent='space-between'>
                  <Grid container gap={5}>
                     <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                     <ProductText>A</ProductText>
                  </Grid>
                  <ProductText>908</ProductText>
               </Grid>
            </SingleProduct>
            <SingleProduct>
               <Grid container alignItems='center' gap={10}>
                  <Image src='/icons/coal.png' width={28} height={28} alt='circle logo' />
                  <Title >COAL Kton</Title>
               </Grid>
               <Lozenge style={{ backgroundColor: '#EB3B3B' }}>89%</Lozenge>
               <Grid container justifyContent='space-between' style={{ marginBottom: '20px' }} >
                  <Grid container gap={5}>
                     <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                     <ProductText>P</ProductText>
                  </Grid>
                  <ProductText>908</ProductText>
               </Grid>
               <Grid container justifyContent='space-between'>
                  <Grid container gap={5}>
                     <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                     <ProductText>A</ProductText>
                  </Grid>
                  <ProductText>908</ProductText>
               </Grid>
            </SingleProduct>
         </WrapperProduct>
      </Wrapper>
   )
}
