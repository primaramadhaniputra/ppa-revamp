import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SafetyPerformance from "./SafetyPerformance";
import { ArrowDown, SelectContainer } from "./styles";


const selectItems = [
  { id: 1, values: 'Safety Performance', label: 'Safety Performance' }
]

const renderContent = (type: string) => {
  if (type === 'Safety Performance') {
    return <SafetyPerformance />
  }
}

export default function Report() {
  const [selectedItem, setSelectedItem] = useState<ISelectItem | ISelectItem[]>({ id: 1, values: 'Safety Performance', label: 'Safety Performance' })

  const handleSelect = (e: ISelectItem | ISelectItem[]) => {
    setSelectedItem(e)
  }
  return (
    <Layout >
      <SelectContainer >
        <label>Menu</label>
        <Select items={selectItems} defaultValue={selectedItem} onChange={handleSelect as any} />
        <ArrowDown></ArrowDown>
      </SelectContainer>
      {renderContent(selectedItem.values)}
    </Layout>
  );
}
