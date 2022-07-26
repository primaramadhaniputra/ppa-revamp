import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AttendanceDetail from "./AttendanceDetail";
import AttendanceRatio from "./AttendanceRatio";
import { ArrowDown, SelectContainer } from "./styles";
import SuratPelanggaran from "./SuratPelanggaran";


const selectItems = [
  { id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' },
  { id: 2, values: 'Attendance Detail', label: 'Attendance Detail' },
  { id: 3, values: 'Surat Pelanggaran', label: 'Surat Pelanggaran' },
]

const renderContent = (type: string) => {
  if (type === 'Attendance Ratio') {
    return <AttendanceRatio />
  } else if (type === 'Attendance Detail') {
    return <AttendanceDetail />
  } else if (type === 'Surat Pelanggaran') {
    return <SuratPelanggaran />
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
