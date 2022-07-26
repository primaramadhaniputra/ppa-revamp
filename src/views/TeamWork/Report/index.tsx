import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AttendanceRatio from "./AttendanceRatio";
import { ArrowDown, SelectContainer } from "./styles";


const selectItems = [
  { id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' },
  { id: 2, values: 'Update Roster', label: 'Update Roster' },
  { id: 3, values: 'Set Roster', label: 'Set Roster' },
  { id: 4, values: 'Attendance Revision', label: 'Attendance Revision' },
  { id: 5, values: 'Upload SPL', label: 'Upload SPL' },
  { id: 6, values: 'Upload DAR', label: 'Upload DAR' },
  { id: 7, values: 'Leaving Application', label: 'Leaving Application' },
  { id: 8, values: 'Benefit Claim Voucher', label: 'Benefit Claim Voucher' },
  { id: 9, values: 'Surat Perintah Lembur', label: 'Surat Perintah Lembur' },
  { id: 10, values: 'Surat Pelanggaran', label: 'Surat Pelanggaran' },
  { id: 11, values: 'Employee Mutation', label: 'Employe Mutation' },
]

const renderContent = (type: string) => {
  if (type === 'Attendance Ratio') {
    return <AttendanceRatio />
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
