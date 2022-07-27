import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AttendanceDetail from "./AttendanceDetail";
import AttendanceRatio from "./AttendanceRatio";
import Induksi from "./Induksi";
import Izin from "./Izin";
import OperatorHours from "./OperatorHours";
import { ArrowDown, SelectContainer } from "./styles";
import SuratPelanggaran from "./SuratPelanggaran";


const selectItems = [
  { id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' },
  { id: 2, values: 'Attendance Detail', label: 'Attendance Detail' },
  { id: 3, values: 'Surat Pelanggaran', label: 'Surat Pelanggaran' },
  { id: 4, values: 'Operator Hours', label: 'Operator Hours' },
  { id: 5, values: 'Induksi', label: 'Induksi' },
  { id: 6, values: 'Izin', label: 'Izin' },
]

const renderContent = (type: string) => {
  if (type === 'Attendance Ratio') {
    return <AttendanceRatio />
  } else if (type === 'Attendance Detail') {
    return <AttendanceDetail />
  } else if (type === 'Surat Pelanggaran') {
    return <SuratPelanggaran />
  } else if (type === 'Operator Hours') {
    return <OperatorHours />
  } else if (type === 'Induksi') {
    return <Induksi />
  } else if (type === 'Izin') {
    return <Izin />
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
