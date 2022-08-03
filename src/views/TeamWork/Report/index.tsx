import { Select } from "@hudoro/neron";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import { useWindowSize } from "utils/functions";
import { fontWeights } from "utils/styles";
import AttendanceDetail from "./AttendanceDetail";
import AttendanceRatio from "./AttendanceRatio";
import Induksi from "./Induksi";
import Izin from "./Izin";
import OperatorHours from "./OperatorHours";
import SelfAttendance from "./SelftAttendance";
import { ArrowDown, SelectContainer, TabsContainer, TabsText } from "./styles";
import SuratPelanggaran from "./SuratPelanggaran";
import TurnOver from "./TurnOver";


const selectItems = [
  { id: 1, values: 'Attendance Ratio', label: 'Attendance Ratio' },
  { id: 2, values: 'Attendance Detail', label: 'Attendance Detail' },
  { id: 3, values: 'Surat Pelanggaran', label: 'Surat Pelanggaran' },
  { id: 4, values: 'Operator Hours', label: 'Operator Hours' },
  { id: 5, values: 'Induksi', label: 'Induksi' },
  { id: 6, values: 'Izin', label: 'Izin' },
  { id: 7, values: 'Turn Over', label: 'Turn Over' },
  { id: 8, values: 'Self Attendance', label: 'Self Attendance' },
]

const tabsData = ['Self Attendance', 'Attendance Ratio', 'Attendance Detail', 'Surat Pelanggaran', 'Operator Hours', 'Ranking Operator', 'Induksi', 'Izin', 'Turn Over']

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
  } else if (type === 'Turn Over') {
    return <TurnOver />
  } else if (type === 'Self Attendance') {
    return <SelfAttendance />
  }
}

export default function Form() {
  const width = useWindowSize()
  const [selectedItem, setSelectedItem] = useState('Self Attendance')
  const handleSelect = (e: string) => {
    setSelectedItem(e)
  }

  return (
    <Layout title="Team Work / Report" >
      {width.width > 900 ? <TabsContainer>
        {tabsData.map((item, index) => <TabsText style={{ backgroundColor: selectedItem === item ? "white" : '', fontWeight: selectedItem === item ? fontWeights.extraBold : fontWeights.regular }} key={index} onClick={() => setSelectedItem(item)}>{item}</TabsText>)}
      </TabsContainer> : <SelectContainer >
        <label>Menu</label>
        <Select items={selectItems} defaultValue={{ id: 1, values: 'Self Attendance', label: 'Self Attendance' }} onChange={handleSelect as any} />
        <ArrowDown></ArrowDown>
      </SelectContainer>}
      {renderContent(selectedItem)}
    </Layout>
  );
}
