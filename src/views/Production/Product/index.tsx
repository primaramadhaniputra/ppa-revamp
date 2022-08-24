import { Grid } from '@hudoro/neron'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useWindowSize } from 'utils/functions'
import { fontWeights } from 'utils/styles'
import { HeaderContainer, ProductText, ProductTextContainer, ProductTitle, SingleProduct, SpanHeader, Wrapper } from './styles'

const data = [
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
   const { width } = useWindowSize()
   const router = useRouter()

   const showChart = () => {
      router.push('detail/1')
   }

   return (
      <>
         <SingleProduct style={{ maxWidth: '500px', marginTop: '30px' }} onClick={showChart} >
            <HeaderContainer>
               <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                  OB kbcm <SpanHeader style={{ backgroundColor: '#47BF34' }}>(105%)</SpanHeader>
               </ProductText>
               <Image src='/images/production1.png' height={width > 350 ? 37 : 20} width={width > 350 ? 37 : 20} alt='product logo' quality={100} />
               <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                  Coal kton <SpanHeader style={{ backgroundColor: '#EB3B3B' }}>(105%)</SpanHeader>
               </ProductText>
            </HeaderContainer>
            <ProductTextContainer>
               <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <Grid container gap={5}>
                        <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                        <ProductText>P</ProductText>
                     </Grid>
                     <ProductText>908</ProductText>
                  </Grid>
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <Grid container gap={5}>
                        <Image src='/images/Ic-Trophy.png' height={16} width={16} alt='product logo' quality={100} />
                        <ProductText>A</ProductText>
                     </Grid>
                     <ProductText>908</ProductText>
                  </Grid>
               </Grid>
               <Grid container style={{ flex: 1 }} justifyContent='center' alignItems='center'>
                  <ProductText>PPA</ProductText>
               </Grid>
               <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <Grid container gap={5}>
                        <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                        <ProductText>P</ProductText>
                     </Grid>
                     <ProductText>408</ProductText>
                  </Grid>
                  <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                     <Grid container gap={5}>
                        <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                        <ProductText>A</ProductText>
                     </Grid>
                     <ProductText>400</ProductText>
                  </Grid>
               </Grid>
            </ProductTextContainer>
         </SingleProduct>
         <ProductTitle>Sites</ProductTitle>
         <Wrapper>
            {
               data.map((item, index) =>
                  <SingleProduct key={index} onClick={showChart} >
                     <HeaderContainer>
                        <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                           OB kbcm <SpanHeader style={{ backgroundColor: '#47BF34' }}>(105%)</SpanHeader>
                        </ProductText>
                        <Image src={item.logo} height={width > 350 ? 37 : 20} width={width > 350 ? 37 : 20} alt='product logo' quality={100} />
                        <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                           Coal kton <SpanHeader style={{ backgroundColor: '#EB3B3B' }}>(105%)</SpanHeader>
                        </ProductText>
                     </HeaderContainer>
                     <ProductTextContainer>
                        <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                           <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                              <Grid container gap={5}>
                                 <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                                 <ProductText>P</ProductText>
                              </Grid>
                              <ProductText>908</ProductText>
                           </Grid>
                           <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                              <Grid container gap={5}>
                                 <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                                 <ProductText>A</ProductText>
                              </Grid>
                              <ProductText>908</ProductText>
                           </Grid>
                        </Grid>
                        <Grid container style={{ flex: 1 }} justifyContent='center' alignItems='center'>
                           <ProductText>{item.title}</ProductText>
                        </Grid>
                        <Grid container style={{ flex: 1 }} flexDirection='column' gap={10} >
                           <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                              <Grid container gap={5}>
                                 <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                                 <ProductText>P</ProductText>
                              </Grid>
                              <ProductText>408</ProductText>
                           </Grid>
                           <Grid container justifyContent='space-between' style={{ flex: 1, maxWidth: '150px' }}>
                              <Grid container gap={5}>
                                 <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                                 <ProductText>A</ProductText>
                              </Grid>
                              <ProductText>400</ProductText>
                           </Grid>
                        </Grid>
                     </ProductTextContainer>
                  </SingleProduct>)
            }
         </Wrapper>
      </>
   )
}
