import { Grid, Text } from '@hudoro/neron'
import React, { useState } from 'react'
import { fontWeights } from 'utils/styles'
import P2H from './P2H'
import { TabText, Wrapper } from './styles'

const tabTitle = ['P2H', 'Saya Peduli', 'SAP', 'Fit To Work']

export default function Mobile() {
   const [activeTab, setActiveTab] = useState(0)

   const handleActiveTab = (index: number) => {
      setActiveTab(index)
   }

   return (
      <Wrapper style={{ marginTop: '30px' }}>
         <Grid container flexDirection="column" gap={20} style={{ flex: 1 }} >
            <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >SHE / Report / Mobile</Text>
         </Grid>
         <Grid container gap={5} style={{ marginTop: '10px' }}>
            {
               tabTitle.map((item, index) =>
                  <TabText key={index} activeTab={activeTab === index ? true : false} onClick={() => handleActiveTab(index)} >{item}</TabText>
               )
            }
         </Grid>
         {activeTab === 0 && <P2H />}
      </Wrapper>
   )
}
