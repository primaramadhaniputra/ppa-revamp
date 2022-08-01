import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Mobile from "./Mobile";
import SafetyPerformance from "./SafetyPerformance";
import { ArrowDown, SelectContainer } from "./styles";


const selectItems = [
  { id: 1, values: 'Safety Performance', label: 'Safety Performance' },
  { id: 2, values: 'Mobile', label: 'Mobile' }
]

const renderContent = (type: string) => {
  if (type === 'Safety Performance') {
    return <SafetyPerformance />
  } else if (type === 'Mobile') {
    return <Mobile />
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
