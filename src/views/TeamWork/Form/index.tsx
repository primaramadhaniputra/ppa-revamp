import { ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SetRoster from "./SetRoster";
import UpdateRoster from "./UpdateRoster";
import UploadRoster from "./UploadRoster";
import { ArrowDown, SelectContainer } from "./UploadRoster/styles";

const selectItems = [
  { id: 1, values: 'Upload Roster', label: 'Upload Roster' },
  { id: 2, values: 'Update Roster', label: 'Update Roster' },
  { id: 3, values: 'Set Roster', label: 'Set Roster' },
  { id: 4, values: 'Attendance Revision', label: 'Attendance Revision' },
  { id: 5, values: 'Upload SPL', label: 'Upload SPL' },
  { id: 5, values: 'Upload DAR', label: 'Upload DAR' },
  { id: 5, values: 'Leaving Application', label: 'Leaving Application' },
  { id: 5, values: 'Benefit Claim Voucher', label: 'Benefit Claim Voucher' },
  { id: 5, values: 'Surat Perintah Lembur', label: 'Surat Perintah Lembur' },
  { id: 5, values: 'Surat Pelanggaran', label: 'Surat Pelanggaran' },
  { id: 5, values: 'Employee Mutation', label: 'Employe Mutation' },
]

const renderContent = (type: string) => {
  if (type === 'Upload Roster') {
    return <UploadRoster />
  } else if (type === 'Update Roster') {
    return <UpdateRoster />
  } else if (type === 'Set Roster') {
    return <SetRoster />
  }

}

export default function Form() {
  const [selectedItem, setSelectedItem] = useState<ISelectItem | ISelectItem[]>({ id: 1, values: 'Upload Roster', label: 'Upload Roster' })

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
