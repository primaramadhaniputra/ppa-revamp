import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AttendanceDetail from "./AttendanceDetail";
import AttendanceRatio from "./AttendanceRatio";
import { ArrowDown, SelectContainer } from "./styles";


const selectItems = [
  { id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' },
  { id: 2, values: 'Attendance Detail', label: 'Attendance Detail' },
]

const renderContent = (type: string) => {
  if (type === 'Attendance Ratio') {
    return <AttendanceRatio />
  }
  if (type === 'Attendance Detail') {
    return <AttendanceDetail />
  }

}

export default function Form() {
  const [selectedItem, setSelectedItem] = useState<ISelectItem | ISelectItem[]>({ id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' })

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
