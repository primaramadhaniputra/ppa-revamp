import React, { useState } from 'react'
import Achievement from './Achievement'
import Detail from './Detail'
import Monitoring from './Monitoring'
import { TabContainer, TabText, Wrapper } from './styles'
import Temuan from './Temuan'

const p2hTab = ['Detail', 'Monitoring', 'Temuan', 'Achievement']

function renderTabContent(e: number) {
   if (e === 3) {
      return <Achievement />
   } else if (e === 2) {
      return <Temuan />
   } else if (e === 1) {
      return <Monitoring />
   } else {
      return <Detail />
   }
}

export default function P2H() {
   const [activeTab, setActiveTab] = useState(3)

   const handleActiveTab = (index: number) => {
      setActiveTab(index)
   }

   return (
      <Wrapper>
         <TabContainer>
            {
               p2hTab.map((item, index) => <TabText key={index} activeTab={activeTab === index ? true : false} onClick={() => handleActiveTab(index)}  >{item}</TabText >)
            }
         </TabContainer>
         {renderTabContent(activeTab)}
      </Wrapper>
   )
}
