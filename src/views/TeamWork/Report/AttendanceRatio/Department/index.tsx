import { Grid, Text } from '@hudoro/neron'
import React, { useState } from 'react'
import { fontWeights } from 'utils/styles'
import TopFilter from '../TopFilter'
import ChartComponent from './Chart'
import Detail from './Detail'
import { TabsContainer, StyledText } from './styles'

const tabs = ['Chart', 'Detail']

export default function Department() {
   const [activeTab, setActiveTab] = useState(0)
   return (
      <>
         <Text variant="h4" style={{ margin: '30px 0', textAlign: 'center', fontWeight: fontWeights.semi }}>Department Attendance Ratio</Text>
         <TopFilter noDept={true} />
         <Grid container flexDirection="column" alignItems="center" justifyContent="center" style={{ marginTop: 10 }}>
            <TabsContainer>
               {tabs.map((item, index) => <StyledText key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>{item}</StyledText>)}
            </TabsContainer>
         </Grid>
         {activeTab === 0 ? <ChartComponent /> : <Detail />}
      </>
   )
}
