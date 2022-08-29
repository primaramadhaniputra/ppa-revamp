import React from 'react'
import Sites from './Sites'
import { ProductTitle } from './styles'
import TotalSites from './TotalSites'

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
   return (
      <>
         <TotalSites />
         <ProductTitle>Sites</ProductTitle>
         <Sites data={data} />
      </>
   )
}
