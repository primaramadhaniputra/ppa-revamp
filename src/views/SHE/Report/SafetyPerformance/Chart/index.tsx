import React from 'react'
import { CartWrapper } from '../styles'
import ChartKecelakaan from './ChartKecelakaan'
import GrafikIncident from './GrafikIncident'
import SafetyPerformanceBar from './SafetyPerformanceBar'

export default function Chart() {
   return (
      <>
         <ChartKecelakaan />
         <CartWrapper >
            <GrafikIncident />
            <SafetyPerformanceBar />
         </CartWrapper>
      </>
   )
}
