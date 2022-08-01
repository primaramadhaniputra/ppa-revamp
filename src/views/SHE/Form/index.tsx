import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Quiz from "./Quiz";
import { ArrowDown, SelectContainer } from "./styles";

const selectItems = [
  { id: 1, values: 'Quiz', label: 'Quiz' },
]

const renderContent = (type: string) => {
  if (type === 'Quiz') {
    return <Quiz />
  }
}

export default function Form() {
  const [selectedItem, setSelectedItem] = useState<ISelectItem | ISelectItem[]>({ id: 1, values: 'Quiz', label: 'Quiz' })

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
