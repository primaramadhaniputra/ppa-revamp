import { Grid } from '@hudoro/neron';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
// import { useWindowSize } from 'utils/functions';
import { allSites } from 'utils/interfaces';
import { fontWeights } from 'utils/styles';
import { HeaderContainer, ProductText, ProductTextContainer, SingleProduct, SpanHeader, Wrapper } from '../styles';

interface IProps {
   sites: allSites[]
}

export default function Sites({ sites }: IProps) {
   const router = useRouter()
   // const { width } = useWindowSize()

   const showChart = () => {
      router.push('detail/1')
   }

   return (
      <Wrapper>
         {
            sites && sites.map((item, index) =>
               <SingleProduct key={index} onClick={showChart} >
                  <HeaderContainer>
                     <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                        OB kbcm <SpanHeader style={{ backgroundColor: '#47BF34' }}>(105%)</SpanHeader>
                     </ProductText>
                     {/* <Image src={item.logo} height={width > 350 ? 37 : 20} width={width > 350 ? 37 : 20} alt='product logo' quality={100} /> */}
                     <ProductText variant='header' style={{ fontWeight: fontWeights.medium }}>
                        Coal kton <SpanHeader style={{ backgroundColor: '#EB3B3B' }}>(105%)</SpanHeader>
                     </ProductText>
                  </HeaderContainer>
                  <ProductTextContainer>
                     <Grid container style={{ flex: 1.5 }} flexDirection='column' gap={10} >
                        <Grid container justifyContent='space-between'>
                           <Grid container gap={5}>
                              <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                              <ProductText>P</ProductText>
                           </Grid>
                           <ProductText>{item.data[0].plan || 0}</ProductText>
                        </Grid>
                        <Grid container justifyContent='space-between' >
                           <Grid container gap={5}>
                              <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                              <ProductText>A</ProductText>
                           </Grid>
                           <ProductText>{item.data[0].production || 0}</ProductText>
                        </Grid>
                     </Grid>
                     <Grid container style={{ flex: 1 }} justifyContent='center' alignItems='center'>
                        <ProductText>{item.siteName}</ProductText>
                     </Grid>
                     <Grid container style={{ flex: 1.5 }} flexDirection='column' gap={10} >
                        <Grid container justifyContent='space-between' >
                           <Grid container gap={5}>
                              <Image src='/images/Ic-Target.png' height={16} width={16} alt='product logo' quality={100} />
                              <ProductText>P</ProductText>
                           </Grid>
                           <ProductText>{item.data[2].plan || 0}</ProductText>
                        </Grid>
                        <Grid container justifyContent='space-between' >
                           <Grid container gap={5}>
                              <Image src='/images/Ic-Trophy.png' height={20.5} width={16} alt='product logo' quality={100} />
                              <ProductText>A</ProductText>
                           </Grid>
                           <ProductText>{item.data[2].production || 0}</ProductText>
                        </Grid>
                     </Grid>
                  </ProductTextContainer>
               </SingleProduct>)
         }
      </Wrapper>
   )
}
