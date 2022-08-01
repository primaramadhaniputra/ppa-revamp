import React, { useState } from 'react'
import Achievement from './Achievement'
import { TabContainer, TabText, Wrapper } from './styles'

const p2hTab = ['Detail', 'Monitoring', 'Temuan', 'Achievement']

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
         {activeTab === 3 && <Achievement />}
      </Wrapper>
   )
}
