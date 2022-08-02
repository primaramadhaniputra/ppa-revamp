import { Grid, Text } from '@hudoro/neron'
import React, { useState } from 'react'
import { fontWeights } from 'utils/styles'
import Question from './Question'
import Schedule from './Schedule'
import { TabText, Wrapper } from './styles'
import Table from './Table'

const tabTitle = ['Subject', 'Question', 'Schedule']

const renderContent = (activeTab: number) => {
   if (activeTab === 0) {
      return <Table />
   } else if (activeTab === 1) {
      return <Question />
   } else {
      return <Schedule />
   }
}

export default function Quiz() {
   const [activeTab, setActiveTab] = useState(0)

   const handleActiveTab = (index: number) => {
      setActiveTab(index)
   }
   return (
      <Wrapper>
         <Grid style={{ flex: 1, marginTop: '30px' }} >
            <Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: '22px' }} >SHE / Form / Quiz</Text>
         </Grid>
         <Grid container gap={10} style={{ marginTop: '10px', padding: '0 10px' }}>
            {
               tabTitle.map((item, index) =>
                  <TabText key={index} activeTab={activeTab === index ? true : false} onClick={() => handleActiveTab(index)} >{item}</TabText>
               )
            }
         </Grid>
         {renderContent(activeTab)}
      </Wrapper>
   )
}