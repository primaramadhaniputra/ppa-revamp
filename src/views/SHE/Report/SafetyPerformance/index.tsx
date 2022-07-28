import { Grid, Text } from '@hudoro/neron'
import React, { useState } from 'react'
import { fontWeights } from 'utils/styles'
import ChartKecelakaan from './ChartKecelakaan'
import GrafikIncident from './GrafikIncident'
import SafetyPerformanceBar from './SafetyPerformanceBar'
import { CartWrapper, Container, StyledText, TabsContainer } from './styles'
import TopFilter from './TopFilter'

const tabs = ['Chart', 'Detail']

export default function SafetyPerformance() {
   const [activeTab, setActiveTab] = useState(1)
   return (
      <>
         <Container style={{ marginTop: '30px' }}>
            <Grid container flexDirection="column" gap={20} style={{ flex: 1 }} >
               <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >SHE / Report / Safety Monitoring</Text>
            </Grid>
            <Grid style={{ flex: 1 }} >
               <TopFilter />
            </Grid>
            <TabsContainer>
               {tabs.map((item, index) => <StyledText key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>{item}</StyledText>)}
            </TabsContainer>
         </Container>
         <ChartKecelakaan />
         <CartWrapper >
            <GrafikIncident />
            <SafetyPerformanceBar />
         </CartWrapper>
      </>
   )
}
