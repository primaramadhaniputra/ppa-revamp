import React from 'react'
import { colors, fontWeights } from 'utils/styles'
import { TabsText } from '../styles'

interface IProps {
   title: string
   id: number
   setActiveTab: React.Dispatch<React.SetStateAction<number>>
   activeTab: number
}

export default function ProductionPerformanceTabHeader({ title, id, setActiveTab, activeTab }: IProps) {

   const handleActiveTab = () => {
      setActiveTab(id)
   }
   return (
      <TabsText onClick={handleActiveTab} style={{ backgroundColor: activeTab === id ? colors.orange : '', fontWeight: activeTab === id ? fontWeights.bold : fontWeights.regular, color: activeTab === id ? 'white' : colors.orange }}  >
         {title}
      </TabsText>
   )
}
